# Vision 2047: Prosperous & Great Bharat 2.0 - Conference Website

A comprehensive, modern website for the **2nd Annual International Conference on Vision 2047** hosted at IIT Roorkee (April 24-26, 2026).

## 🌟 Features

### ✅ Fully Implemented Sections

1. **Loading Screen** - Animated welcome screen with logo animation and progress bar
2. **Hero Section** - Eye-catching hero with constellation animation and CTA buttons
3. **Navigation Bar** - Sticky navbar with mobile-responsive menu
4. **About Section** - Mission, Vision, and Objectives with beautiful card layout
5. **8 Conference Themes** - Grid view with expandable sub-topics
6. **Timeline Section** - Visual timeline of important dates and registration fees table
7. **Why Attend** - Benefits and conference statistics
8. **Patrons & Advisory Board** - Leadership section with organized committee members
9. **Location/How to Reach** - Map, directions, contact info, and accommodation details
10. **Registration & Payment** - Step-by-step payment instructions and quick links
11. **Footer** - Comprehensive footer with links and organizing information

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#003D7A` - IIT Roorkee official blue
- **Gold Accent**: `#FFB81C` - Conference brand gold
- **Orange Accent**: `#D97706` - Additional emphasis color

### Typography
- **Headings**: Clean, bold sans-serif
- **Body**: Readable sans-serif with proper line-height
- **Mobile-First Responsive Design**

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and theme
├── components/
│   ├── loading-screen.tsx  # Animated loading component
│   ├── hero-section.tsx    # Hero section with animation
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer component
│   └── sections/           # Section components
│       ├── about-section.tsx
│       ├── themes-section.tsx
│       ├── timeline-section.tsx
│       ├── why-attend-section.tsx
│       ├── patrons-section.tsx
│       ├── location-section.tsx
│       └── registration-section.tsx
└── lib/
    └── conference-data.ts  # All conference data and content
```

## 🚀 Getting Started

### Installation

1. **Clone or download the project**
   ```bash
   cd v0-project
   ```

2. **Install dependencies** (automatic in v0)
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:3000`

## 📝 Content Management

All conference content is stored in `/lib/conference-data.ts`:

- Conference details (dates, location)
- Mission, Vision, and Objectives
- 8 Conference Themes with sub-topics
- Timeline and registration fees
- Patron and committee member details
- Why attend reasons
- Payment instructions and notes

### To Update Content:
Edit the `conferenceData` object in `/lib/conference-data.ts` to update any information.

## 🖼️ Images Required

Please provide and place these images in `/public/`:

1. **iit-logo.png** - IIT Roorkee logo (used in loading screen and hero)
2. **swadeshi-logo.png** - Swadeshi Shodh Sansthan logo (used in loading screen and hero)
3. **IIT.jpg** - IIT Roorkee campus image (used in hero section background)

### Image Sizes (Recommended)
- Logos: 256x256px (PNG with transparency)
- Campus image: 1920x1080px (JPG)

### Placeholder Images
Currently, the site uses placeholder paths. Replace these with actual images:
- Change `/iit-logo.png` → your actual logo path
- Change `/swadeshi-logo.png` → your actual logo path
- Change `/IIT.jpg` → your campus image path

## 🎯 Patrons & Committee Members

To add photos of patrons and committee members:

1. Create a `/public/images/patrons/` directory
2. Add individual member images
3. Update the `patrons-section.tsx` to use images:

```tsx
<img 
  src={`/images/patrons/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
  alt={name}
  className="w-14 h-14 rounded-full object-cover"
/>
```

## 🔗 External Links

Update these links in the components:

1. **Registration Link** - Update in `hero-section.tsx` and `registration-section.tsx`
   - Change: `https://forms.google.com/your-form-link`

2. **Payment Link** - Update in `registration-section.tsx`
   - Change: `https://payment.iitroorkee.ac.in`

3. **Email Contact** - Already set to `vision2047@iitroorkee.ac.in`

4. **Phone** - Already set to `+91-1332-286-260`

## 🎓 QR Codes

Add QR code images in the location section:

1. Create QR codes for:
   - Conference details/registration page
   - Campus map

2. Place images in `/public/images/qrcodes/`

3. Update `location-section.tsx` to display actual QR code images

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Optimized for all screen sizes
- ✅ Touch-friendly navigation
- ✅ Fast loading with optimized images

## 🔍 SEO Optimization

- Metadata includes title, description, and keywords
- OpenGraph tags for social sharing
- Proper heading hierarchy
- Semantic HTML structure

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Click Deploy
4. Environment: Fully static (no backend required)

### Environment Variables
No environment variables are required for this static site.

## 📊 Performance

- Optimized loading screen with smooth animations
- Efficient component structure
- Smooth scroll behavior
- Responsive images
- Minimal dependencies

## 🛠️ Customization

### Change Theme Colors
Edit CSS variables in `globals.css`:
```css
:root {
  --primary-blue: #003D7A;
  --primary-gold: #FFB81C;
  --primary-orange: #D97706;
}
```

### Add New Sections
1. Create component in `/components/sections/`
2. Import in `app/page.tsx`
3. Add to page render
4. Update navbar links if needed

### Update Dates
Edit dates in `/lib/conference-data.ts`:
- Conference dates
- Registration deadlines
- Submission deadlines

## 📞 Support

For issues or questions about the content:
- Email: `vision2047@iitroorkee.ac.in`
- Phone: `+91-1332-286-260`

## 📄 License

Created with ❤️ for Vision 2047: Prosperous & Great Bharat 2.0

---

**Next Steps:**
1. ✅ Replace placeholder images in `/public/`
2. ✅ Update external links (registration and payment forms)
3. ✅ Add QR codes and patron photos
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel
