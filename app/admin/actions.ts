'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PortfolioItem } from '@/types/portfolio'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // For simplicity using email/password, but could use magic link
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/admin', 'layout')
    redirect('/admin/dashboard')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/admin', 'layout')
    redirect('/admin/login')
}

export async function createPortfolioItem(formData: FormData) {
    const supabase = await createClient()

    // Verify auth again
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const mediaType = formData.get('mediaType') as string
    const src = formData.get('src') as string
    const thumbnail = formData.get('thumbnail') as string
    const aspectRatio = parseFloat(formData.get('aspectRatio') as string)
    const featured = formData.get('featured') === 'on'

    const { error } = await supabase.from('portfolio_items').insert({
        title,
        category,
        media_type: mediaType,
        src,
        thumbnail: thumbnail || null,
        aspect_ratio: aspectRatio,
        featured
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/portfolio')
    revalidatePath('/')
    // Do not redirect to avoid client-side try/catch issues
    return { success: true }
}

export async function deletePortfolioItem(id: string) {
    const supabase = await createClient()

    // Verify auth
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const { error } = await supabase.from('portfolio_items').delete().eq('id', id)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/admin/dashboard')
    revalidatePath('/portfolio')
    revalidatePath('/')
}
