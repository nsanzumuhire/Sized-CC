import Link from 'next/link'
import Image from 'next/image'
import { LayoutDashboard } from 'lucide-react'
import { LogoutButton } from '@/components/admin/logout-button'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-neutral-950 p-6 flex flex-col">
                <div className="mb-8 pl-2">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Sized Logo"
                            width={120}
                            height={40}
                            className="w-auto h-8 object-contain"
                        />
                    </Link>
                    <div className="text-xs text-neutral-500 mt-2 pl-1">Admin Portal</div>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 text-white transition-colors"
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>
                </nav>

                <LogoutButton />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
