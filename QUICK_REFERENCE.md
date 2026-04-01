# Vision 2047 Website - Quick Reference Guide

## ⚡ Most Common Tasks

### Update a Date
**File**: `/lib/conference-data.ts`
```typescript
dates: 'April 24 – 26, 2026'  // Change this
```

### Update Registration Fee
**File**: `/lib/conference-data.ts`
```typescript
registrationFees: [
  { category: 'UG/PG Students', fee: '₹1,000' },  // Change fee here
]
```

### Update Contact Email
**File**: `/lib/conference-data.ts` or search in all files
```typescript
'vision2047@iitroorkee.ac.in'  // Change to new email
```

### Update Contact Phone
**File**: `/lib/conference-data.ts` or search in all files
```typescript
'+91-1332-286-260'  // Change to new number
```

### Change Conference Title
**File**: `/lib/conference-data.ts`
```typescript
title: 'Vision 2047: Prosperous & Great Bharat 2.0'  // Update title
```

---

## 🔗 Update Links

### Registration Form Link
**Files to Update:**
1. `/components/hero-section.tsx` - Line with register button
2. `/components/sections/registration-section.tsx` - Registration Link section

**Find**: `https://forms.google.com/your-form-link`
**Replace With**: Your actual registration form URL

### Payment Gateway Link
**File**: `/components/sections/registration-section.tsx`
**Find**: `https://payment.iitroorkee.ac.in`
**Replace With**: Your actual payment gateway URL

### Email Links
**Already Set**: `vision2047@iitroorkee.ac.in`
**Where**: Footer and Location section

### Phone Links
**Already Set**: `+91-1332-286-260`
**Where**: Footer and Location section

---

## 🖼️ Image Management

### Add/Replace Logos
1. Place images in `/public/` directory
2. Names expected:
   - `iit-logo.png` - IIT Roorkee logo
   - `swadeshi-logo.png` - Swadeshi logo
   - `IIT.jpg` - Campus image

### Add Patron Photos
1. Create folder: `/public/images/patrons/`
2. Add photos with descriptive names
3. Update `patrons-section.tsx` to include images

### Add QR Codes
1. Create folder: `/public/images/qrcodes/`
2. Add QR code images
3. Update `location-section.tsx` to display them

### Image Optimization
- Use JPEG for photos (quality 80-85)
- Use PNG for logos with transparency
- Compress before uploading
- Recommended sizes:
  - Logos: 256x256px
  - Photos: 1920x1080px max
  - QR codes: 300x300px

---

## 📝 Content Updates

### Add a Committee Member
**File**: `/lib/conference-data.ts`
```typescript
organizingCommittee: [
  {
    name: 'New Person Name',
    title: 'Their Position/Title',
    category: 'committee',
  },
  // ... rest of list
]
```

### Change a Theme Description
**File**: `/lib/conference-data.ts`
```typescript
themes: [
  {
    id: 1,
    title: 'Theme Title',
    description: 'Update this description',
    subtopics: ['subtopic 1', 'subtopic 2']
  }
]
```

### Add/Update Registration Fee Category
**File**: `/lib/conference-data.ts`
```typescript
registrationFees: [
  {
    category: 'New Category',
    fee: '₹Amount'
  }
]
```

### Update Timeline Event
**File**: `/lib/conference-data.ts`
```typescript
timeline: [
  {
    event: 'Event Name',
    date: 'Date String',
    status: 'open' // or 'active' or 'upcoming'
  }
]
```

---

## 🎨 Styling Changes

### Change Colors
**File**: `/app/globals.css`
```css
:root {
  --primary-blue: #003D7A;      /* Main color */
  --primary-gold: #FFB81C;      /* Accent */
  --primary-orange: #D97706;    /* Secondary */
}
```

### Change Background of Section
**Example**: Update About section background
**File**: `/components/sections/about-section.tsx`
```tsx
<section id="about" className="py-20 px-4 bg-white">
  {/* Change "bg-white" to different color */}
</section>
```

### Change Text Color
Use Tailwind classes:
- `text-white` - White text
- `text-gray-700` - Dark gray
- `text-[#003D7A]` - Custom color (IIT blue)
- `text-[#FFB81C]` - Custom color (Gold)

### Add Shadow to Element
```tsx
<div className="shadow-md">  {/* Light shadow */}
<div className="shadow-lg">  {/* Medium shadow */}
<div className="shadow-2xl"> {/* Heavy shadow */}
```

---

## 🚀 Deployment Quick Steps

### 1. Prepare
```bash
pnpm install
pnpm build
pnpm start  # Test locally
```

### 2. Commit
```bash
git add .
git commit -m "Vision 2047 Website - Ready"
git push origin main
```

### 3. Deploy to Vercel
**Option A - CLI:**
```bash
vercel --prod
```

**Option B - Web:**
1. Go to vercel.com/dashboard
2. Import GitHub repo
3. Click Deploy

**Option C - GitHub:**
Push to GitHub, Vercel auto-deploys

### 4. Verify
- Visit your Vercel URL
- Check all sections load
- Test mobile responsiveness
- Verify links work

---

## 🐛 Debugging

### Website Not Loading
```bash
# Clear cache and rebuild
rm -rf .next
pnpm install
pnpm build
pnpm dev
```

### Images Not Showing
- Check image is in `/public/`
- Check path matches in code
- Check file extension (must match)
- Try different image format

### Links Not Working
- Check href matches section id
- Verify URL is correct
- Test in different browser
- Clear browser cache

### Mobile Layout Broken
- Use browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Check Tailwind responsive classes
- Test on actual phone

### Slow Performance
- Optimize images (compress)
- Check image sizes
- Use Lighthouse tool (DevTools)
- Check for console errors

---

## 📱 Mobile Testing

### Quick Test Checklist
- [ ] Open on phone
- [ ] Tap all buttons
- [ ] Scroll through sections
- [ ] Check text readability
- [ ] Verify images display
- [ ] Test hamburger menu
- [ ] Click all links

### Test Devices
- iPhone 12 (375px)
- iPhone 14 (390px)
- iPad (768px)
- Android (360px)
- Desktop (1920px)

---

## 📊 File Directory

```
Quick Access Locations:

Content:
  /lib/conference-data.ts           ← All content

Styling:
  /app/globals.css                  ← Global styles
  /components/**/page.tsx           ← Component styles

Images:
  /public/iit-logo.png              ← Place images here
  /public/swadeshi-logo.png
  /public/IIT.jpg

Components:
  /components/sections/             ← Section components
  /components/navbar.tsx            ← Navigation
  /components/footer.tsx            ← Footer

Configuration:
  /app/layout.tsx                   ← SEO & metadata
  /tailwind.config.ts               ← Tailwind config
  /tsconfig.json                    ← TypeScript config
  /next.config.mjs                  ← Next.js config
```

---

## 🔍 Find & Replace

### Search for Text Across Project
Use VS Code:
1. Press `Ctrl+Shift+F` (Find in Files)
2. Type text to find
3. Click "Replace All" to change

### Common Finds
- `vision2047@iitroorkee.ac.in` - Email
- `+91-1332-286-260` - Phone
- `April 24-26, 2026` - Conference dates
- `IIT Roorkee` - Location
- `Prosperous and Great Bharat 2.0` - Conference name

---

## 📚 File References

### Which File For What?

**Add new content**: `/lib/conference-data.ts`

**Change styling**: `/app/globals.css` or component className

**Add new section**: Create in `/components/sections/`

**Change navigation**: `/components/navbar.tsx`

**SEO/Metadata**: `/app/layout.tsx`

**Main page**: `/app/page.tsx`

**Footer**: `/components/footer.tsx`

---

## ✅ Verification Checklist

Before deploying, verify:

**Content:**
- [ ] All dates are correct
- [ ] All fees are accurate
- [ ] Names spelled correctly
- [ ] Phone and email correct
- [ ] No typos or grammar errors

**Images:**
- [ ] IIT logo present
- [ ] Swadeshi logo present
- [ ] Campus image present
- [ ] All images display

**Links:**
- [ ] Registration form link works
- [ ] Payment link works
- [ ] Email links work
- [ ] Phone links work

**Functionality:**
- [ ] All sections load
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] No console errors

**Performance:**
- [ ] Page loads fast
- [ ] Images are optimized
- [ ] No broken links
- [ ] Responsive design works

---

## 💬 Common Questions

### Q: How do I add more themes?
A: Edit `/lib/conference-data.ts`, add to `themes` array

### Q: How do I change the main color?
A: Update `--primary-blue` in `/app/globals.css`

### Q: Where do I upload images?
A: Create folder `/public/`, place images there

### Q: How do I test on mobile?
A: Use browser DevTools device mode (F12)

### Q: How do I deploy?
A: Push to GitHub, then use Vercel dashboard

### Q: Can I use my own domain?
A: Yes, Vercel supports custom domains

### Q: How do I update text?
A: Edit `/lib/conference-data.ts`

### Q: Where is the footer?
A: `/components/footer.tsx`

### Q: Can I add animations?
A: Yes, edit component className or `/app/globals.css`

### Q: How do I add more people?
A: Add to appropriate array in `/lib/conference-data.ts`

---

## 🆘 Quick Help

### Something Broke?
1. Check console for errors (F12)
2. Verify syntax in files
3. Clear cache: `rm -rf .next`
4. Restart: `pnpm dev`

### Need to Revert?
```bash
git log                    # See history
git checkout [commit-id]   # Go back
git push origin main       # Deploy old version
```

### Performance Issues?
1. Optimize images
2. Check Lighthouse score
3. Reduce dependencies
4. Remove unused CSS

---

## 🎯 Daily Tasks

### Every Day
- Monitor website uptime
- Check for errors in console
- Respond to inquiries

### Every Week
- Check analytics
- Review website functionality
- Update content if needed

### Every Month
- Full testing
- Backup data
- Update dependencies

### Every Quarter
- Performance audit
- Security review
- Plan updates

---

**Need More Help?**
- See `/README.md` for full documentation
- See `/SETUP_GUIDE.md` for setup
- See `/DEPLOYMENT_CHECKLIST.md` before launch

**Ready to make changes? Open a file and start editing!** ✨
