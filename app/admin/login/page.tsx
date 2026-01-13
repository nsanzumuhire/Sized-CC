'use client'

import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { login } from '../actions'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? (
                <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                </span>
            ) : (
                'Sign In'
            )}
        </button>
    )
}

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 bg-neutral-900/50 border border-white/10 rounded-xl backdrop-blur-md">
                <div className="flex flex-col items-center mb-8">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Sized Logo"
                            width={150}
                            height={50}
                            className="w-auto h-10 object-contain mb-4"
                        />
                    </Link>
                    <h1 className="text-xl font-bold text-white">Admin Portal</h1>
                </div>

                <form action={login} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Enter username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Enter password"
                        />
                    </div>

                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}
