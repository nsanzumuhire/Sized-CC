'use client'

import { useFormStatus } from 'react-dom'
import { Trash2, Loader2 } from 'lucide-react'
import { deletePortfolioItem } from '@/app/admin/actions'

function DeleteIcon() {
    const { pending } = useFormStatus()

    if (pending) {
        return <Loader2 className="w-5 h-5 animate-spin" />
    }
    return <Trash2 className="w-5 h-5" />
}

export function DeleteButton({ itemId }: { itemId: string }) {
    return (
        <form action={deletePortfolioItem.bind(null, itemId)}>
            <button
                type="submit"
                className="p-2 bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-colors cursor-pointer disabled:opacity-50"
            >
                <DeleteIcon />
            </button>
        </form>
    )
}
