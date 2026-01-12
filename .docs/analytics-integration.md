# Vercel Analytics Integration - SIZED.CC

## 📊 Overview

Vercel Analytics has been fully integrated into the SIZED.CC website to track user behavior, conversions, and performance metrics. This comprehensive implementation provides insights into how users interact with the site, particularly focusing on quote requests and contact methods.

## 🎯 What's Being Tracked

### High-Priority Tracking (Quote & Contact Events)

#### 1. **Quote Modal Interactions**
- **Modal Opens**: Tracks when users open the quote request modal
  - Location: navbar, hero, mobile navbar, etc.
  - Service interest (if applicable)
- **Quote Submissions**: Tracks completed quote requests via WhatsApp
  - Service type selected
  - Conversion tracking

#### 2. **Contact Method Clicks**
Tracks all contact interactions across the site:
- **Email clicks**: `sizedrwanda@gmail.com`
  - Tracked from: navbar, footer
- **Phone clicks**: `+250 795 555 575`
  - Tracked from: navbar, footer
- **WhatsApp**: Quote modal submissions

### Additional Tracking

- **Page Views**: Automatically tracked by Vercel Analytics
- **Core Web Vitals**: Tracked via Speed Insights (LCP, FID, CLS)
- **Navigation Clicks**: Can be extended for internal navigation
- **Service Interactions**: Can be extended for service card clicks

## 📁 Files Modified

### Core Analytics Files
1. **`lib/analytics.ts`** (NEW)
   - Central analytics utility with tracking functions
   - Organized by event type (quotes, contact, navigation, etc.)
   - Type-safe tracking with parameters

2. **`app/layout.tsx`**
   - Added `SpeedInsights` component
   - Existing `Analytics` component already present

3. **`components/providers/quote-modal-provider.tsx`**
   - Enhanced `openModal` to accept tracking parameters
   - Automatically tracks modal opens with context

### Component Updates (Quote Tracking)

4. **`components/ui/quote-modal.tsx`**
   - Tracks quote form submissions
   - Tracks WhatsApp contact method

5. **`components/layout/navbar.tsx`**
   - Desktop "Get Quote" button tracking
   - Mobile "Request Quote" button tracking
   - Email and phone link tracking in contact dropdown

6. **`components/layout/footer.tsx`**
   - Email link tracking
   - Phone link tracking

7. **`components/sections/hero-v2.tsx`**
   - Hero "Request a Quote" button tracking

8. **`package.json`**
   - Added `@vercel/speed-insights@^1.1.0`

## 🔧 How It Works

### Event Structure

All tracking events follow this pattern:

```typescript
// Example: Quote Click Tracking
trackQuoteClick({ 
  location: 'navbar',    // Where the click occurred
  service: 'signage'     // Optional: Service interest
});
```

### Event Parameters

| Event | Parameters | Purpose |
|-------|-----------|---------|
| `quote_click` | location, service | User clicked a quote button |
| `quote_modal_open` | trigger, service | Modal was opened |
| `quote_submit` | service, hasAttachment | User submitted quote form |
| `contact_click` | method, location | User clicked contact link |

## 📍 Tracking Locations

### Quote Buttons
- **Navbar (Desktop)**: `location: 'navbar'`
- **Navbar (Mobile)**: `location: 'navbar-mobile'`
- **Hero Section**: `location: 'hero'`
- **Footer** (if applicable): `location: 'footer'`

### Contact Methods
- **Email**:
  - Navbar: `{ method: 'email', location: 'navbar' }`
  - Footer: `{ method: 'email', location: 'footer' }`
- **Phone**:
  - Navbar: `{ method: 'phone', location: 'navbar' }`
  - Footer: `{ method: 'phone', location: 'footer' }`
- **WhatsApp**:
  - Quote Modal: `{ method: 'whatsapp', location: 'quote-modal' }`

## 📈 Accessing Analytics Data

### Vercel Dashboard
1. Go to [https://vercel.com](https://vercel.com)
2. Navigate to your SIZED.CC project
3. Click on "Analytics" in the sidebar

### Available Metrics
- **Pageviews**: Total pageviews and unique visitors
- **Custom Events**: All tracked events (quote clicks, contact clicks, etc.)
- **Top Pages**: Most visited pages
- **Referrers**: Where visitors come from
- **Devices**: Desktop vs Mobile analytics
- **Geography**: Visitor locations

### Speed Insights
- **LCP (Largest Contentful Paint)**: Loading performance
- **FID (First Input Delay)**: Interactivity
- **CLS (Cumulative Layout Shift)**: Visual stability
- **Performance Score**: Overall site performance

## 🎨 Extending Analytics

### Adding New Tracking Events

To track additional interactions:

1. **Define the function in `lib/analytics.ts`**:
```typescript
export const trackServiceCardClick = (params: {
  serviceId: string;
  serviceName: string;
}) => {
  track('service_card_click', {
    serviceId: params.serviceId,
    serviceName: params.serviceName,
    timestamp: new Date().toISOString(),
  });
};
```

2. **Import and use in component**:
```typescript
import { trackServiceCardClick } from '@/lib/analytics';

<div onClick={() => trackServiceCardClick({ 
  serviceId: 'signage', 
  serviceName: 'Custom Signage' 
})}>
  {/* Service card content */}
</div>
```

## 🔒 Privacy Considerations

Vercel Analytics is:
- **GDPR Compliant**: No cookies, no personal data collection
- **Privacy-Friendly**: Uses aggregated, anonymized data
- **No PII**: No personally identifiable information tracked
- **Cookieless**: Works without browser cookies

## 🚀 Performance Impact

- **Minimal Bundle Size**: ~3KB gzipped
- **Non-Blocking**: Loaded asynchronously
- **Edge Optimized**: Runs on Vercel's edge network
- **No Performance Penalty**: Does not affect Core Web Vitals

## 📊 Key Metrics to Monitor

### Conversion Funnel
1. **Page Views** → Users landing on site
2. **Quote Clicks** → Users interested in quotes
3. **Modal Opens** → Users engaging with quote form
4. **Quote Submits** → Actual conversions

### Contact Preferences
- Email vs Phone vs WhatsApp usage
- Navbar vs Footer contact engagement
- Desktop vs Mobile behavior

### Performance
- Core Web Vitals trends
- Page load times
- Mobile vs Desktop performance

## 🛠️ Troubleshooting

### Analytics Not Showing
1. Ensure project is deployed on Vercel
2. Wait 5-10 minutes for data to appear
3. Check Vercel dashboard under Analytics tab

### Events Not Tracking
1. Verify `@vercel/analytics` is installed
2. Check browser console for errors
3. Ensure `<Analytics />` component is in layout
4. Verify tracking functions are imported correctly

## 📝 Best Practices

1. **Consistent Naming**: Use lowercase with underscores for event names
2. **Descriptive Parameters**: Make parameters self-explanatory
3. **Location Tracking**: Always include location context
4. **Timestamp Events**: Include timestamps for time-based analysis
5. **Avoid PII**: Never track personal information

## 🎯 Next Steps

1. ✅ Analytics fully integrated
2. ✅ Speed Insights enabled
3. ✅ Quote and contact tracking active
4. 📊 Monitor dashboard for insights
5. 🔄 Iterate based on user behavior data

---

**Last Updated**: January 12, 2026
**Version**: 1.0.0
**Author**: Analytics Implementation
