import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { Plus, Video } from 'lucide-react'
import { UploadPortfolioModal } from '@/components/admin/upload-portfolio-modal'
import { DeleteButton } from '@/components/admin/delete-button'
import { ToggleFeaturedButton } from '@/components/admin/toggle-featured-button'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: items } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
                <UploadPortfolioModal>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                        <Plus className="w-5 h-5" />
                        <span>Upload Portfolio</span>
                    </button>
                </UploadPortfolioModal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items?.map((item) => (
                    <div key={item.id} className="group bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden">
                        <div className="relative aspect-[4/3] bg-neutral-900">
                            {item.media_type === 'video' ? (
                                <>
                                    <Image
                                        src={item.thumbnail || item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-50"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Video className="w-12 h-12 text-white/50" />
                                    </div>
                                </>
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            )}

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <ToggleFeaturedButton itemId={item.id} isFeatured={item.featured} />
                                <DeleteButton itemId={item.id} />
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex items-start justify-between mb-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    {item.category}
                                </span>
                                {item.featured && (
                                    <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold text-white truncate">{item.title}</h3>
                        </div>
                    </div>
                ))}

                {(!items || items.length === 0) && (
                    <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-2xl">
                        <p className="text-neutral-500 mb-4">No portfolio items found</p>
                        <UploadPortfolioModal>
                            <button className="text-primary hover:underline cursor-pointer">
                                Create your first item
                            </button>
                        </UploadPortfolioModal>
                    </div>
                )}
            </div>
        </div>
    )
}
