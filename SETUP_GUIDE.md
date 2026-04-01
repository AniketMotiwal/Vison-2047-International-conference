# Vision 2047 Conference Website - Setup Guide

## Quick Start (5 Steps)

### Step 1: Install & Run
```bash
pnpm install
pnpm dev
```
Visit `http://localhost:3000` to see the website.

### Step 2: Add Images
Create `/public/` directory and add:
- `iit-logo.png` - IIT Roorkee logo
- `swadeshi-logo.png` - Swadeshi Shodh Sansthan logo
- `IIT.jpg` - IIT Campus photo

### Step 3: Update Links
Find and replace in these files:

**hero-section.tsx:**
- Replace `https://forms.google.com/your-form-link` with actual registration form URL

**registration-section.tsx:**
- Replace `https://forms.google.com/your-form-link` with registration form
- Replace `https://payment.iitroorkee.ac.in` with actual payment gateway URL

### Step 4: Verify Contact Information
Email and phone are already set in footer and location section:
- Email: `vision2047@iitroorkee.ac.in`
- Phone: `+91-1332-286-260`

### Step 5: Deploy
1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy ✅

## Content Management

All text content is in `/lib/conference-data.ts`. To update:
- Conference dates
- Registration fees
- Theme descriptions
- Patron names
- Committee members
- Timeline events
- Any other text

Simply edit the `conferenceData` object and refresh the page.

## Adding Patron Photos

1. Create directory: `/public/images/patrons/`
2. Add photos (JPG or PNG)
3. Update `patrons-section.tsx` to include image elements

```tsx
<img 
  src="/images/patrons/photo.jpg"
  alt="Person Name"
  className="w-14 h-14 rounded-full object-cover"
/>
```

## Adding QR Codes

1. Create directory: `/public/images/qrcodes/`
2. Add QR code images
3. Update `location-section.tsx` to replace placeholder with:

```tsx
<img 
  src="/images/qrcodes/registration.png"
  alt="Registration QR Code"
  className="w-48 h-48"
/>
```

## Customizing Appearance

### Change Colors
Edit `/app/globals.css`:
```css
:root {
  --primary-blue: #003D7A;     /* Main color */
  --primary-gold: #FFB81C;     /* Accent */
  --primary-orange: #D97706;   /* Secondary accent */
}
```

### Change Fonts
Fonts are already imported in `app/layout.tsx` using Google Fonts (Geist family).

### Add Custom Styling
Add CSS to `/app/globals.css` or add Tailwind classes directly to components.

## Common Updates

### Change Conference Date
File: `/lib/conference-data.ts`
```ts
dates: 'April 24 – 26, 2026'
```

### Add New Section
1. Create `/components/sections/my-section.tsx`
2. Import in `/app/page.tsx`
3. Add to JSX
4. Update navbar in `/components/navbar.tsx`

### Update Registration Fees
File: `/lib/conference-data.ts`
```ts
registrationFees: [
  { category: 'Students', fee: '₹1,000' },
  // Add more...
]
```

## Mobile Testing

1. Run `pnpm dev`
2. Open DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Test on various screen sizes

All sections are mobile-responsive and tested.

## Troubleshooting

### Images not showing
- Ensure images are in `/public/` directory
- Check file extensions match in code
- Clear browser cache (Ctrl+Shift+Delete)

### Links not working
- Check URLs are correctly formatted
- Test links before deploying
- Verify external links are accessible

### Content not updating
- Clear browser cache
- Restart dev server
- Check `/lib/conference-data.ts` for syntax errors

## Performance Tips

1. **Optimize images**: Compress JPG/PNG before uploading
2. **Cache**: Vercel handles caching automatically
3. **Speed**: Already optimized with minimal dependencies

## Backup & Version Control

1. Always use Git
2. Commit before making changes
3. Use GitHub or similar for version history
4. Backup important content regularly

## Next Conference Updates

To update for next year:
1. Update dates in `conference-data.ts`
2. Update theme descriptions if needed
3. Replace patron/committee list
4. Update registration fees if changed
5. Update location/contact if changed
6. Re-deploy to Vercel

## Need Help?

- Check `/README.md` for detailed documentation
- Review component structure in `/components/`
- Check `/lib/conference-data.ts` for all content
- Test changes locally before deploying

---

**You're all set! 🚀 Good luck with Vision 2047 Conference!**
