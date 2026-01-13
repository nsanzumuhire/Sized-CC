'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { createPortfolioItem } from '@/app/admin/actions'
import { SERVICE_CATEGORIES } from '@/types/portfolio'
import { Loader2, Upload, X, FileVideo, Check } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function UploadPortfolioModal({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [uploading, setUploading] = useState(false)

    // Multiple files state
    const [files, setFiles] = useState < File[] > ([])
    const [previews, setPreviews] = useState < string[] > ([])

    const [category, setCategory] = useState < string > ('')
    const [progress, setProgress] = useState < string > ('')
    const [currentUploadIndex, setCurrentUploadIndex] = useState < number > (-1)

    const formRef = useRef < HTMLFormElement > (null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files)
            setFiles(prev => [...prev, ...newFiles])

            const newPreviews = newFiles.map(file => URL.createObjectURL(file))
            setPreviews(prev => [...prev, ...newPreviews])
        }
    }

    const removeFile = (index: number) => {
        if (uploading) return

        const newFiles = [...files]
        const newPreviews = [...previews]

        URL.revokeObjectURL(newPreviews[index])

        newFiles.splice(index, 1)
        newPreviews.splice(index, 1)

        setFiles(newFiles)
        setPreviews(newPreviews)
    }

    const resetForm = () => {
        setFiles([])
        setPreviews([])
        setCategory('')
        setProgress('')
        setCurrentUploadIndex(-1)
        if (formRef.current) formRef.current.reset()
    }

    const handleOpenChange = (isOpen: boolean) => {
        if (uploading) return
        setOpen(isOpen)
        if (!isOpen) {
            setTimeout(resetForm, 300)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (files.length === 0) return
        if (!category) {
            alert("Please select a category")
            return
        }

        const formData = new FormData(e.currentTarget)

        setUploading(true)
        const supabase = createClient()
        const baseTitle = formData.get('title') as string
        const isFeatured = formData.get('featured') === 'on'

        try {
            for (let i = 0; i < files.length; i++) {
                setCurrentUploadIndex(i)
                const file = files[i]
                setProgress(`Uploading ${i + 1} of ${files.length}...`)

                const timestamp = Date.now()
                const fileExt = file.name.split('.').pop()
                const fileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`
                const filePath = `${fileName}`

                const isVideo = file.type.startsWith('video/')
                const mediaType = isVideo ? 'video' : 'image'

                const { error: uploadError } = await supabase.storage
                    .from('portfolio-media')
                    .upload(filePath, file)

                if (uploadError) throw uploadError

                const { data: { publicUrl } } = supabase.storage
                    .from('portfolio-media')
                    .getPublicUrl(filePath)

                let itemAspectRatio = 1.0
                if (!isVideo) {
                    await new Promise < void> ((resolve) => {
                        const img = new window.Image()
                        img.onload = () => {
                            itemAspectRatio = img.height / img.width
                            resolve()
                        }
                        img.src = previews[i]
                    })
                } else {
                    itemAspectRatio = 0.5625
                }

                const newFormData = new FormData()
                newFormData.append('title', files.length > 1 ? `${baseTitle} ${i + 1}` : baseTitle)
                newFormData.append('category', category)
                newFormData.append('mediaType', mediaType)
                newFormData.append('src', publicUrl)
                newFormData.append('aspectRatio', itemAspectRatio.toString())
                if (isFeatured) newFormData.append('featured', 'on')

                const result = await createPortfolioItem(newFormData)
                if (result?.error) throw new Error(result.error)
            }

            await new Promise(r => setTimeout(r, 500))

            setOpen(false)
            resetForm()
            router.refresh()

        } catch (error) {
            console.error('Error creating items:', error)
            alert('Failed to upload some items. Check console.')
        } finally {
            setUploading(false)
            setProgress('')
            setCurrentUploadIndex(-1)
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-white/10"
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle className="text-xl">Upload Portfolio Items</DialogTitle>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-4">
                    {/* File Drop Area */}
                    <div className={`
            border-2 border-dashed rounded-xl p-8 text-center transition-colors relative
            ${files.length > 0 ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/20 bg-white/5'}
            `}>
                        <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-upload-modal"
                            required={files.length === 0}
                            multiple
                            disabled={uploading}
                        />

                        {files.length === 0 ? (
                            <label htmlFor="file-upload-modal" className="cursor-pointer flex flex-col items-center gap-4 w-full h-full">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Upload className="w-6 h-6 text-neutral-400" />
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-white">Click to upload</p>
                                    <p className="text-sm text-neutral-500 mt-1">Images or Videos up to 500MB</p>
                                </div>
                            </label>
                        ) : (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto p-2">
                                    {files.map((file, idx) => {
                                        const isUploading = uploading && idx === currentUploadIndex
                                        const isDone = uploading && idx < currentUploadIndex

                                        return (
                                            <div key={idx} className="relative group aspect-square bg-black rounded-lg overflow-hidden border border-white/10">
                                                {isUploading && (
                                                    <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center backdrop-blur-sm">
                                                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                                    </div>
                                                )}
                                                {isDone && (
                                                    <div className="absolute inset-0 bg-primary/20 z-20 flex items-center justify-center">
                                                        <div className="bg-primary rounded-full p-1">
                                                            <Check className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                )}

                                                {file.type.startsWith('video/') ? (
                                                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                                                        <FileVideo className="w-8 h-8" />
                                                    </div>
                                                ) : (
                                                    <Image
                                                        src={previews[idx]}
                                                        alt="Preview"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}

                                                {!uploading && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFile(idx)}
                                                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 truncate text-[10px] text-white">
                                                    {file.name}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {!uploading && (
                                    <label htmlFor="file-upload-modal" className="block text-sm text-primary hover:text-primary/80 cursor-pointer">
                                        + Add more files
                                    </label>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Title Prefix</label>
                            <input
                                name="title"
                                required
                                disabled={uploading}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
                                placeholder="e.g. Modern Villa Signage"
                            />
                            {files.length > 1 && (
                                <p className="text-xs text-neutral-500 mt-1">Files will be numbered: Title 1, Title 2...</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Category</label>
                            <Select value={category} onValueChange={setCategory} disabled={uploading}>
                                <SelectTrigger className="w-full bg-black/50 border-white/10 text-white h-[42px] disabled:opacity-50 cursor-pointer">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-900 border-white/10 text-white">
                                    {SERVICE_CATEGORIES.filter(c => c.value !== 'all').map((cat) => (
                                        <SelectItem key={cat.value} value={cat.value} className="focus:bg-white/10 focus:text-white cursor-pointer">
                                            {cat.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="featured"
                            id="featured-modal"
                            disabled={uploading}
                            className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary accent-primary disabled:opacity-50 cursor-pointer"
                        />
                        <label htmlFor="featured-modal" className="text-sm font-medium text-neutral-300 select-none cursor-pointer">
                            Feature on Homepage
                        </label>
                    </div>

                    <Button
                        type="submit"
                        disabled={uploading}
                        className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base cursor-pointer disabled:cursor-not-allowed"
                    >
                        {uploading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="animate-spin w-5 h-5" />
                                <span>{progress || 'Uploading...'}</span>
                            </div>
                        ) : (
                            `Upload ${files.length > 0 ? `${files.length} Item${files.length > 1 ? 's' : ''}` : 'Items'}`
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
