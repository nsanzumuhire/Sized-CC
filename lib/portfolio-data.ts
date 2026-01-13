import { createClient } from '@/lib/supabase/client';
import { PortfolioItem, ServiceCategory, MediaType } from '@/types/portfolio';

// Fallback data in case DB is empty or connection fails (optional, good for demo)
export const fallbackPortfolioItems: PortfolioItem[] = [
    // ... we can add more fallback items if needed, but ideally we use DB
];

export async function fetchPortfolioItems(): Promise<PortfolioItem[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching portfolio items:', error);
        return [];
    }

    // Transform DB fields to Client types if necessary (snake_case to camelCase handled by types if we mapped them)
    // Our DB has underscore: media_type, aspect_ratio
    // Our Types have camelCase: mediaType, aspectRatio
    // We need to map them.

    return (data || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        category: item.category as ServiceCategory,
        mediaType: item.media_type as MediaType,
        src: item.src,
        thumbnail: item.thumbnail,
        aspectRatio: item.aspect_ratio || 1,
        featured: item.featured
    }));
}

export async function fetchFeaturedItems(): Promise<PortfolioItem[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(6);

    if (error) {
        console.error('Error fetching featured items:', error);
        return [];
    }

    return (data || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        category: item.category as ServiceCategory,
        mediaType: item.media_type as MediaType,
        src: item.src,
        thumbnail: item.thumbnail,
        aspectRatio: item.aspect_ratio || 1,
        featured: item.featured
    }));
}
