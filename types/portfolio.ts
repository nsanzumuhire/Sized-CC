export type MediaType = 'image' | 'video';

export type ServiceCategory =
    | 'signage'
    | 'branding'
    | 'furniture'
    | 'decor'
    | 'gifts'
    | 'print';

export interface PortfolioItem {
    id: string;
    title: string;
    category: ServiceCategory;
    mediaType: MediaType;
    src: string;
    thumbnail?: string; // For video thumbnails
    aspectRatio: number; // height/width ratio for masonry layout
    featured?: boolean; // Show on homepage
}

export const SERVICE_CATEGORIES: { value: ServiceCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'signage', label: 'Signage' },
    { value: 'branding', label: 'Branding' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'decor', label: 'Décor' },
    { value: 'gifts', label: 'Gifts' },
    { value: 'print', label: 'Print' },
];

export const MEDIA_TYPES: { value: MediaType | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'image', label: 'Photos' },
    { value: 'video', label: 'Videos' },
];
