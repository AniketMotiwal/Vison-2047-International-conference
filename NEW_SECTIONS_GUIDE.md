# New Sections Added: Patrons, Committee & Universities

## Overview

Three enhanced sections have been added to the Vision 2047 website with professional circular profile image designs matching the reference PDFs you provided.

---

## 1. Patrons Section (Updated)
**Location:** `/components/sections/patrons-section.tsx`  
**Page ID:** `#patrons`

### Features
- **20 Distinguished Patrons** displayed in circular profile frames
- **12 Advisory Board Members** with role badges
- Circular profile images with dashed borders (matching your PDF design)
- Hover effects with scale transitions
- Color-coded initials for easy identification
- Fully responsive grid layout (2-4 columns based on screen size)

### Design Details
- **Patrons:** Blue circular backgrounds with initials
- **Advisory Board:** Purple circular backgrounds with role badges
- Dashed border effect for authenticity
- Mobile-friendly 2-column grid, desktop 4-column grid

### How to Customize

**Add/Edit Patrons:**
Edit `/lib/conference-data.ts` → `patrons` array:
```typescript
{
  name: 'Name of Patron',
  title: 'Position/Affiliation',
  image: '/patrons/name-slug.jpg', // Optional: upload actual photo
}
```

**Update Patrons:** All 20 patrons from the PDF are already added.

---

## 2. Organizing Committee Section (New)
**Location:** `/components/sections/organizing-committee-section.tsx`  
**Page ID:** `#organizing-committee`

### Features
- **14 Committee Members** displayed with role badges
- **Color-coded role badges** (purple for secretaries, gold for coordinators)
- Circular profile frames with initials
- Professional title and affiliation display
- Responsive 3-column desktop, 2-column tablet, 1-column mobile

### Role Categories (Color-Coded)
- **ORGANISING SECRETARY - 01/02:** Purple (#8B2E5F)
- **JOINT ORGANIZING SECRETARY:** Gold (#B8860B)
- **COMMITTEE MEMBER:** Gray (#4A5568)

### How to Customize

**Edit Committee Members:**
Edit `/lib/conference-data.ts` → `organizingCommittee` array:
```typescript
{
  name: 'Full Name',
  title: 'Position, Institution',
  role: 'ORGANISING SECRETARY - 01', // or other roles
  image: '/committee/name-slug.jpg',
}
```

**Add Member Photos:**
1. Create `/public/committee/` directory
2. Upload member photos with slug format: `name-lastname.jpg`
3. Update image path in data

---

## 3. Association of Indian Universities Section (New)
**Location:** `/components/sections/association-universities-section.tsx`  
**Page ID:** `#association-universities`

### Features
- **AIU Logo Badge** in center (custom styling)
- **2 Prominent Members** left and right of logo (header design)
- **14 Global Institution Leaders** in grid layout
- All circular profile images with pink dashed borders
- "Global Institutions" subsection with color-coded banner
- Professional footer note

### Design Elements
- **Header:** 2 side profiles + central AIU badge
- **Grid:** 4-column desktop, 2-column tablet, 1-column mobile
- **Colors:** Pink/rose theme for international flavor
- Dashed circular borders matching reference PDF

### How to Customize

**Edit Global Institutions:**
Edit `/lib/conference-data.ts` → `globalInstitutions` array:
```typescript
{
  name: 'Full Name',
  title: 'Position, Institution, Country',
  image: '/global-institutions/name-slug.jpg',
}
```

**Add Institution Photos:**
1. Create `/public/global-institutions/` directory
2. Upload photos with slug format
3. Update image paths

---

## Navigation Updates

The navbar has been updated with new links:
- "Committee" → `#organizing-committee`
- "Universities" → `#association-universities`

Both sections now appear in the sticky navigation menu on all pages.

---

## Page Order

The sections now appear in this order on the page:

1. Loading Screen
2. Navigation
3. Hero Section
4. About Section
5. Themes Section (8 themes)
6. Timeline Section
7. Why Attend Section
8. **Patrons & Board** (UPDATED)
9. **Organizing Committee** (NEW)
10. **Association of Universities** (NEW)
11. Location Section
12. Registration Section
13. Footer

---

## Image Placeholders

Default placeholder images have been generated for:
- `/public/patrons/default-patron.jpg`
- `/public/committee/default-member.jpg`
- `/public/global-institutions/default-institution.jpg`
- `/public/advisory/default-advisor.jpg`

These are used when specific member photos aren't available.

---

## Data Files Updated

### `/lib/conference-data.ts`
Three new data arrays added:

1. **patrons** (20 members)
   - All patrons from PDF with initials support

2. **advisoryBoard** (12 members)
   - Advisory board with role badges
   - Includes roles: Co-Convener, Joint Secretary, Member

3. **organizingCommittee** (14 members)
   - Organizing secretaries and committee members
   - Color-coded roles

4. **globalInstitutions** (16 members)
   - International university presidents and leaders
   - Global institutions from PDF

---

## Styling & Responsiveness

All three sections use:
- **Tailwind CSS v4** for styling
- **Mobile-first responsive design**
- **Circular profile frames** with dashed borders
- **Hover effects** (scale & shadow)
- **Smooth transitions** for better UX
- **Gradient backgrounds** for visual appeal

### Breakpoints
- **Mobile:** 2 columns (except committee: 1 column)
- **Tablet (md):** 2-3 columns
- **Desktop (lg):** 3-4 columns

---

## Adding Real Photos

To use actual member photos instead of initials:

1. **Prepare images:** Resize to 200x200px (min quality 72dpi)
2. **Create folders:** 
   - `/public/patrons/`
   - `/public/committee/`
   - `/public/advisory/`
   - `/public/global-institutions/`
3. **Upload files:** Name as `firstname-lastname.jpg`
4. **Update data:** Change image path in `/lib/conference-data.ts`

Example:
```typescript
{
  name: 'Prof Akshay Dwivedi',
  title: 'HOD, Mechanical & Industrial Engineering, IIT R',
  role: 'ORGANISING SECRETARY - 01',
  image: '/committee/akshay-dwivedi.jpg', // Will use actual photo if uploaded
}
```

If image file exists, it displays the photo; otherwise shows initials.

---

## Upcoming Enhancements

Potential features you can add:
- Actual member photos (recommended)
- Hover tooltips with bio/contact info
- PDF export of all committee members
- Search/filter functionality
- Social media links for members
- Member contact information modals

---

## Support & Questions

Refer to:
- `README.md` - Full project documentation
- `QUICK_REFERENCE.md` - Common customizations
- `DEPLOYMENT_CHECKLIST.md` - Pre-launch verification
- `PROJECT_SUMMARY.md` - Complete feature overview

---

## Summary

✅ **Patrons Section:** Completely redesigned with circular profiles (20 patrons + 12 advisory)  
✅ **Organizing Committee:** New section with 14 members and role badges  
✅ **Association of Universities:** New section with 16 global institution leaders  
✅ **Navigation:** Updated with links to new sections  
✅ **Data:** All members from PDF extracted and organized  
✅ **Images:** Placeholder generation ready, awaiting real photos  
✅ **Design:** Matches your PDF reference perfectly with circular dashed borders  

Your website now has a complete leadership showcase with professional section layouts!
