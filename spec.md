# HireNest Workforce Website

## Current State
- About page has two white CTA cards with buttons using electric blue background and white text
- Admin dashboard fetches all form submissions (vendor, partner, requirement, contact) from backend
- No notification system exists for new submissions

## Requested Changes (Diff)

### Add
- New submission notification system in Admin: badge counts per tab showing unread submissions since last visit (tracked via localStorage)
- Toast alert on Admin page when new submissions are detected

### Modify
- About page CTA buttons: change from electric blue background + white text to white background + black text

### Remove
- Nothing removed

## Implementation Plan
1. About.tsx: Update all 3 button styles to `backgroundColor: 'white'` and add `text-black` class
2. Admin.tsx: Add localStorage-based "last seen" timestamps per tab. On data load, compute unread counts vs last seen timestamps. Show badge with count on each tab trigger. Show toast notification on new submissions.
