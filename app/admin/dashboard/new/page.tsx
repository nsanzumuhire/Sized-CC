'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { createPortfolioItem } from '../../actions'
import { SERVICE_CATEGORIES } from '@/types/portfolio'
import { Loader2, Upload, X } from 'lucide-react'

export default function NewItemPage() {
    const router = useRouter()
    const [uploading, setUploading] = useState(false)
    const [file, setFile] = useState < File | null > (null)
    const [thumbnailFile, setThumbnailFile] = useState < File | null > (null)
    const [preview, setPreview] = useState < string | null > (null)
    const [mediaType, setMediaType] = useState < 'image' | 'video' > ('image')
    const formRef = useRef < HTMLFormElement > (null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            setFile(selectedFile)

            // Create preview
            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)

            // Auto-detect type
            if (selectedFile.type.startsWith('video/')) {
                setMediaType('video')
            } else {
                setMediaType('image')
            }
        }
    }

    const handleSubmit = async (formData: FormData) => {
        if (!file) return
        setUploading(true)

        try {
            const supabase = createClient()
            const timestamp = Date.now()

            // 1. Upload Main File
            const fileExt = file.name.split('.').pop()
            const fileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('portfolio-media')
                .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data: { publicUrl } } = supabase.storage
                .from('portfolio-media')
                .getPublicUrl(filePath)

            // 2. Upload Thumbnail (if video)
            let thumbnailUrl = ''
            if (mediaType === 'video' && thumbnailFile) {
                const thumbExt = thumbnailFile.name.split('.').pop()
                const thumbName = `thumb-${timestamp}.${thumbExt}`

                const { error: thumbError } = await supabase.storage
                    .from('portfolio-media')
                    .upload(thumbName, thumbnailFile)

                if (thumbError) throw thumbError

                const { data } = supabase.storage
                    .from('portfolio-media')
                    .getPublicUrl(thumbName)

                thumbnailUrl = data.publicUrl
            }

            // 3. Calculate Aspect Ratio (for images) or use default
            let itemAspectRatio = 1.0 // Default square

            if (mediaType === 'image') {
                await new Promise < void> ((resolve) => {
                    const img = new window.Image()
                    img.onload = () => {
                        itemAspectRatio = img.height / img.width // Height-to-width ratio for masonry
                        resolve()
                    }
                    img.src = preview!
                })
            } else {
                itemAspectRatio = 0.5625 // 16:9
            }

            // 4. Submit to Server Action
            formData.set('src', publicUrl)
            if (thumbnailUrl) formData.set('thumbnail', thumbnailUrl)
            formData.set('aspectRatio', itemAspectRatio.toString())
            formData.set('mediaType', mediaType)

            await createPortfolioItem(formData)

        } catch (error) {
            console.error('Error creating item:', error)
            alert('Failed to create item. Please try again.')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Add New Portfolio Item</h1>

            <form ref={formRef} action={handleSubmit} className="space-y-6">
                {/* Upload Area */}
                <div className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-colors
          ${file ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/20 bg-white/5'}
        `}>
                    <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        required
                    />

                    {!file ? (
                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                <Upload className="w-8 h-8 text-neutral-400" />
                            </div>
                            <div>
                                <p className="text-lg font-medium">Click to upload image or video</p>
                                <p className="text-sm text-neutral-500 mt-1">MP4, JPG, PNG, WEBP up to 500MB</p>
                            </div>
                        </label>
                    ) : (
                        <div className="relative">
                            {mediaType === 'video' ? (
                                <video src={preview!} controls className="max-h-[300px] mx-auto rounded-lg" />
                            ) : (
                                <Image
                                    src={preview!}
                                    alt="Preview"
                                    width={400}
                                    height={300}
                                    className="max-h-[300px] w-auto mx-auto rounded-lg object-contain"
                                />
                            )}
                            <button
                                type="button"
                                onClick={() => {
                                    setFile(null)
                                    setPreview(null)
                                    setThumbnailFile(null)
                                }}
                                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Thumbnail Upload (Video only) */}
                {mediaType === 'video' && (
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">Video Thumbnail</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files && setThumbnailFile(e.target.files[0])}
                            className="block w-full text-sm text-neutral-400
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-white/10 file:text-white
                  hover:file:bg-white/20
                "
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">Title</label>
                        <input
                            name="title"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="e.g. Modern Office Signage"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">Category</label>
                        <select
                            name="category"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                        >
                            {SERVICE_CATEGORIES.filter(c => c.value !== 'all').map(category => (
                                <option key={category.value} value={category.value}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="featured"
                        id="featured"
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-neutral-300">
                        Feature on Homepage
                    </label>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={uploading}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {uploading && <Loader2 className="animate-spin w-4 h-4" />}
                        {uploading ? 'Uploading...' : 'Create Item'}
                    </button>
                </div>
            </form>
        </div>
    )
}
