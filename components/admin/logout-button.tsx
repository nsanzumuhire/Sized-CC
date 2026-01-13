'use client'

import { useFormStatus } from 'react-dom'
import { LogOut, Loader2 } from 'lucide-react'
import { logout } from '@/app/admin/actions'

function LogoutIcon() {
    const { pending } = useFormStatus()

    if (pending) {
        return <Loader2 className="w-[18px] h-[18px] animate-spin" />
    }
    return <LogOut size={18} />
}

export function LogoutButton() {
    return (
        <form action={logout}>
            <button
                type="submit"
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-500/10 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
                <LogoutIcon />
                Sign Out
            </button>
        </form>
    )
}
