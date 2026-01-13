import { track } from '@vercel/analytics';

/**
 * Analytics tracking utilities for Sized.CC
 * Tracks user interactions, conversions, and engagement
 */

// ============================================================================
// QUOTE & CONTACT TRACKING (High Priority)
// ============================================================================

/**
 * Track when user clicks "Get Quote" button
 */
export const trackQuoteClick = (params?: {
    location?: string; // e.g., 'hero', 'navbar', 'footer', 'service-card'
    service?: string;  // e.g., 'signage', 'furniture', 'branding'
}) => {
    track('quote_click', {
        location: params?.location || 'unknown',
        service: params?.service || 'general',
        timestamp: new Date().toISOString(),
    });
};

/**
 * Track when quote modal is opened
 */
export const trackQuoteModalOpen = (params?: {
    trigger?: string; // What triggered the modal
    service?: string;
}) => {
    track('quote_modal_open', {
        trigger: params?.trigger || 'button',
        service: params?.service || 'general',
        timestamp: new Date().toISOString(),
    });
};

/**
 * Track quote form submission
 */
export const trackQuoteSubmit = (params?: {
    service?: string;
    hasAttachment?: boolean;
}) => {
    track('quote_submit', {
        service: params?.service || 'general',
        hasAttachment: params?.hasAttachment || false,
        timestamp: new Date().toISOString(),
    });
};

/**
 * Track contact button clicks (email, phone, social media)
 */
export const trackContactClick = (params: {
    method: 'email' | 'phone' | 'whatsapp' | 'instagram' | 'linkedin' | 'twitter' | 'other';
    location?: string; // e.g., 'hero', 'footer', 'contact-section'
}) => {
    track('contact_click', {
        method: params.method,
        location: params.location || 'unknown',
        timestamp: new Date().toISOString(),
    });
};

// ============================================================================
// NAVIGATION & ENGAGEMENT TRACKING
// ============================================================================

/**
 * Track navigation clicks
 */
export const trackNavClick = (params: {
    destination: string; // e.g., 'services', 'about', 'contact'
    location?: 'navbar' | 'footer' | 'inline';
}) => {
    track('nav_click', {
        destination: params.destination,
        location: params.location || 'navbar',
    });
};

/**
 * Track service card interactions
 */
export const trackServiceView = (params: {
    serviceId: string;
    serviceName: string;
    action?: 'view' | 'hover' | 'click';
}) => {
    track('service_interaction', {
        serviceId: params.serviceId,
        serviceName: params.serviceName,
        action: params.action || 'view',
    });
};

/**
 * Track scroll depth to measure engagement
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
    track('scroll_depth', {
        depth,
        timestamp: new Date().toISOString(),
    });
};

// ============================================================================
// SOCIAL MEDIA TRACKING
// ============================================================================

/**
 * Track social media link clicks
 */
export const trackSocialClick = (params: {
    platform: 'instagram' | 'linkedin' | 'twitter' | 'facebook' | 'other';
    location?: string;
}) => {
    track('social_click', {
        platform: params.platform,
        location: params.location || 'unknown',
    });
};

// ============================================================================
// CONVERSION TRACKING
// ============================================================================

/**
 * Track when user initiates a download
 */
export const trackDownload = (params: {
    fileType: string;
    fileName?: string;
}) => {
    track('download', {
        fileType: params.fileType,
        fileName: params.fileName || 'unknown',
    });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (params: {
    url: string;
    location?: string;
}) => {
    track('external_link', {
        url: params.url,
        location: params.location || 'unknown',
    });
};

// ============================================================================
// ERROR TRACKING
// ============================================================================

/**
 * Track form errors or submission failures
 */
export const trackError = (params: {
    errorType: 'form_validation' | 'network' | 'upload' | 'other';
    message?: string;
    location?: string;
}) => {
    track('error', {
        errorType: params.errorType,
        message: params.message || 'unknown',
        location: params.location || 'unknown',
    });
};
