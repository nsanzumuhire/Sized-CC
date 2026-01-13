'use client'

import { useFormStatus } from 'react-dom'
import { Star, Loader2 } from 'lucide-react'
import { toggleFeatured } from '@/app/admin/actions'

function ToggleIcon({ isFeatured }: { isFeatured: boolean }) {
    const { pending } = useFormStatus()

    if (pending) {
        return <Loader2 className="w-5 h-5 animate-spin" />
    }
    return <Star className={`w-5 h-5 ${isFeatured ? 'fill-current' : ''}`} />
}

export function ToggleFeaturedButton({ itemId, isFeatured }: { itemId: string; isFeatured: boolean }) {
    return (
        <form action={toggleFeatured.bind(null, itemId, isFeatured)}>
            <button
                type="submit"
                title={isFeatured ? 'Remove from featured' : 'Add to featured'}
                className={`p-2 rounded-full transition-colors cursor-pointer disabled:opacity-50 ${isFeatured
                        ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                        : 'bg-white/10 text-white/50 hover:bg-yellow-500/20 hover:text-yellow-500'
                    }`}
            >
                <ToggleIcon isFeatured={isFeatured} />
            </button>
        </form>
    )
}
