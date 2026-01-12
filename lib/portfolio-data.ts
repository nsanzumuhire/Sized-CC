import { PortfolioItem } from '@/types/portfolio';

export const portfolioItems: PortfolioItem[] = [
    // Featured items (shown on homepage)
    {
        id: '1',
        title: 'Corporate Signage',
        category: 'signage',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        aspectRatio: 1.3,
        featured: true,
    },
    {
        id: '2',
        title: 'Steel Table Frame',
        category: 'furniture',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
        aspectRatio: 0.8,
        featured: true,
    },
    {
        id: '3',
        title: 'Office Fitout',
        category: 'branding',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        aspectRatio: 1.5,
        featured: true,
    },
    {
        id: '4',
        title: 'Geometric Wall Art',
        category: 'decor',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80',
        aspectRatio: 1.0,
        featured: true,
    },
    {
        id: '5',
        title: 'Custom Branding',
        category: 'branding',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        aspectRatio: 0.7,
        featured: true,
    },
    {
        id: '6',
        title: 'Industrial Shelving',
        category: 'furniture',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        aspectRatio: 1.2,
        featured: true,
    },
    // Additional items (portfolio page only)
    {
        id: '7',
        title: 'Neon Signage',
        category: 'signage',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&q=80',
        aspectRatio: 1.4,
    },
    {
        id: '8',
        title: 'Reception Desk',
        category: 'furniture',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80',
        aspectRatio: 0.9,
    },
    {
        id: '9',
        title: 'Award Trophies',
        category: 'gifts',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
        aspectRatio: 1.3,
    },
    {
        id: '10',
        title: 'Vehicle Wrap',
        category: 'branding',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
        aspectRatio: 0.75,
    },
    {
        id: '11',
        title: 'Metal Wall Sculpture',
        category: 'decor',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&q=80',
        aspectRatio: 1.1,
    },
    {
        id: '12',
        title: 'Storefront Signage',
        category: 'signage',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80',
        aspectRatio: 0.85,
    },
    {
        id: '13',
        title: 'Wall Graphics',
        category: 'print',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
        aspectRatio: 1.25,
    },
    {
        id: '14',
        title: 'Corporate Medals',
        category: 'gifts',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=600&q=80',
        aspectRatio: 1.0,
    },
    {
        id: '15',
        title: 'Custom Wallpaper',
        category: 'print',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        aspectRatio: 1.4,
    },
    {
        id: '16',
        title: 'Metal Bookshelf',
        category: 'furniture',
        mediaType: 'image',
        src: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80',
        aspectRatio: 1.6,
    },
    // Video items
    {
        id: 'v1',
        title: 'Signage Installation',
        category: 'signage',
        mediaType: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        aspectRatio: 0.56,
    },
    {
        id: 'v2',
        title: 'Furniture Crafting',
        category: 'furniture',
        mediaType: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
        aspectRatio: 0.56,
    },
    {
        id: 'v3',
        title: 'Branding Reveal',
        category: 'branding',
        mediaType: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
        aspectRatio: 0.56,
    },
];

export const getFeaturedItems = (): PortfolioItem[] => {
    return portfolioItems.filter((item) => item.featured).slice(0, 6);
};

export const filterPortfolioItems = (
    category: string,
    mediaType: string
): PortfolioItem[] => {
    return portfolioItems.filter((item) => {
        const matchesCategory = category === 'all' || item.category === category;
        const matchesMedia = mediaType === 'all' || item.mediaType === mediaType;
        return matchesCategory && matchesMedia;
    });
};
