# Vision 2047 Conference Website - Complete File Tree

## 📁 Project Directory Structure

```
vision-2047-website/
│
├── 📋 DOCUMENTATION (Start Here!)
│   ├── BUILD_COMPLETE.md              ← ⭐ Read this first!
│   ├── DOCS_INDEX.md                  ← Navigation guide
│   ├── QUICK_REFERENCE.md             ← Quick how-tos
│   ├── README.md                      ← Full documentation
│   ├── SETUP_GUIDE.md                 ← Setup instructions
│   ├── DEPLOYMENT_CHECKLIST.md        ← Pre-launch guide
│   ├── PROJECT_SUMMARY.md             ← Project overview
│   └── FILE_TREE.md                   ← This file
│
├── 📂 app/                            (Next.js App Directory)
│   ├── favicon.ico
│   ├── globals.css                    ← Global styles (EDIT HERE for colors)
│   ├── layout.tsx                     ← Main layout & SEO metadata
│   ├── page.tsx                       ← Home page with all sections
│   └── opengraph-image.png
│
├── 📂 components/                     (React Components)
│   ├── 🎯 Main Components
│   │   ├── footer.tsx                 ← Footer with links & contact
│   │   ├── hero-section.tsx           ← Hero with animation
│   │   ├── loading-screen.tsx         ← Initial loading animation
│   │   ├── navbar.tsx                 ← Navigation bar
│   │   └── theme-provider.tsx         ← Theme configuration
│   │
│   ├── 📄 sections/                   (Page Sections)
│   │   ├── about-section.tsx          ← Mission, Vision, Objectives
│   │   ├── location-section.tsx       ← How to Reach
│   │   ├── patrons-section.tsx        ← Leadership & Board
│   │   ├── registration-section.tsx   ← Registration & Payment
│   │   ├── themes-section.tsx         ← 8 Conference Themes
│   │   ├── timeline-section.tsx       ← Timeline & Fees Table
│   │   ├── why-attend-section.tsx     ← Why Attend
│   │   └── [All other sections...]
│   │
│   └── 🎨 ui/                        (Shadcn/UI Components - Pre-built)
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── [60+ more UI components...]
│       └── tooltip.tsx
│
├── 📂 lib/                            (Utilities & Data)
│   ├── conference-data.ts             ← ⭐ ALL CONTENT (EDIT THIS!)
│   └── utils.ts                       ← Helper functions
│
├── 📂 public/                         (Static Assets)
│   ├── 🖼️ Images
│   │   ├── iit-logo.png              ✅ Generated
│   │   ├── swadeshi-logo.png         ✅ Generated
│   │   ├── IIT.jpg                   ✅ Generated
│   │   └── images/                   (Optional - for additional images)
│   │       ├── patrons/              (For patron photos)
│   │       └── qrcodes/              (For QR codes)
│   │
│   ├── 📄 Static Files
│   │   ├── favicon.ico
│   │   ├── icon.svg
│   │   ├── icon-dark-32x32.png
│   │   ├── icon-light-32x32.png
│   │   └── apple-icon.png
│   │
│   ├── 🔤 Fonts
│   │   └── [Google Fonts loaded automatically]
│   │
│   └── 📦 Data
│       └── [Optional: static JSON files]
│
├── ⚙️ Configuration Files
│   ├── .eslintrc.json                 ← ESLint config
│   ├── .gitignore                     ← Git ignore rules
│   ├── .prettierignore                ← Prettier ignore rules
│   ├── next.config.mjs                ← Next.js configuration
│   ├── package.json                   ← Dependencies & scripts
│   ├── package-lock.json              ← Dependency lock file
│   ├── pnpm-lock.yaml                 ← pnpm lock file
│   ├── tailwind.config.ts             ← Tailwind configuration
│   ├── tsconfig.json                  ← TypeScript configuration
│   └── jest.config.ts                 ← Jest testing config
│
├── 📊 Hidden Files (Auto-generated)
│   ├── .next/                         ← Build output (ignore)
│   ├── node_modules/                  ← Dependencies (ignore)
│   └── .git/                          ← Git history
│
├── 📄 Root Files
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── [Configuration files]
│
└── 📚 Documentation (in root)
    ├── BUILD_COMPLETE.md
    ├── DEPLOYMENT_CHECKLIST.md
    ├── DOCS_INDEX.md
    ├── FILE_TREE.md (this file)
    ├── PROJECT_SUMMARY.md
    ├── README.md
    ├── QUICK_REFERENCE.md
    └── SETUP_GUIDE.md
```

---

## 🎯 Key Files to Know

### 🔴 CRITICAL - Edit These
| File | Purpose | Edit For |
|------|---------|----------|
| `/lib/conference-data.ts` | All content | Content changes |
| `/components/navbar.tsx` | Navigation | Navigation links |
| `/components/hero-section.tsx` | Hero section | Registration form link |
| `/components/sections/registration-section.tsx` | Registration | Payment link |
| `/app/globals.css` | Global styles | Colors, fonts |
| `/app/layout.tsx` | SEO & metadata | Title, description |

### 🟡 OPTIONAL - Customize
| File | Purpose | Customize For |
|------|---------|----------------|
| `/components/*/` | Section components | Layout/styling |
| `/public/iit-logo.png` | IIT logo | Your logo |
| `/public/swadeshi-logo.png` | Swadeshi logo | Your logo |
| `/public/IIT.jpg` | Campus image | Your image |
| `/tailwind.config.ts` | Tailwind config | Advanced theming |

### 🟢 DON'T EDIT - Auto-managed
| File | Purpose |
|------|---------|
| `/node_modules/` | Dependencies |
| `/.next/` | Build output |
| `/.git/` | Version control |
| `/package-lock.json` | Lock file |
| `/pnpm-lock.yaml` | pnpm lock file |

---

## 📂 File Organization by Purpose

### Content Management
```
/lib/conference-data.ts      ← All text content
/components/*/              ← Component structure
/public/                    ← Images & assets
```

### Styling & Design
```
/app/globals.css            ← Global styles & colors
/tailwind.config.ts         ← Tailwind configuration
/components/ui/             ← Pre-built UI components
```

### Pages & Sections
```
/app/page.tsx               ← Main page (combines all sections)
/components/hero-section.tsx
/components/sections/       ← Individual sections
  ├── about-section.tsx
  ├── themes-section.tsx
  ├── timeline-section.tsx
  └── [7 more sections...]
```

### Navigation & Layout
```
/components/navbar.tsx      ← Top navigation
/components/footer.tsx      ← Bottom footer
/app/layout.tsx             ← Root layout
```

### Configuration
```
/next.config.mjs            ← Next.js settings
/package.json               ← Dependencies
/tsconfig.json              ← TypeScript settings
/tailwind.config.ts         ← Tailwind settings
```

### Documentation
```
/BUILD_COMPLETE.md          ← Completion status
/QUICK_REFERENCE.md         ← Quick tasks
/README.md                  ← Full guide
/DEPLOYMENT_CHECKLIST.md    ← Launch guide
/SETUP_GUIDE.md             ← Setup steps
/PROJECT_SUMMARY.md         ← Overview
/DOCS_INDEX.md              ← Doc navigation
/FILE_TREE.md               ← This file
```

---

## 🎨 Component Hierarchy

```
app/page.tsx (Main Page)
│
├── LoadingScreen
│   └── Animations
│
├── Navbar
│   ├── Logo
│   └── Navigation Links
│
├── HeroSection
│   ├── Logos
│   ├── Title
│   └── CTA Buttons
│
├── AboutSection
│   ├── Conference Overview
│   ├── Mission Card
│   ├── Vision Card
│   └── Objectives Card
│
├── ThemesSection
│   └── Theme Cards (8 total)
│       └── Expandable Sub-topics
│
├── TimelineSection
│   ├── Timeline (Vertical)
│   └── Fees Table
│
├── WhyAttendSection
│   ├── Benefits (6 items)
│   └── Statistics (4 boxes)
│
├── PatronsSection
│   ├── Patrons (11 members)
│   ├── Advisory Board (10 members)
│   └── Organizing Committee (12 members)
│
├── LocationSection
│   ├── Map Placeholder
│   ├── Address Card
│   ├── Contact Card
│   ├── Getting There Card
│   ├── QR Codes Section
│   └── Accommodation Info
│
├── RegistrationSection
│   ├── Payment Steps (4 steps)
│   ├── Quick Links (2 buttons)
│   ├── Abstract Submission Info
│   └── Important Notes
│
└── Footer
    ├── Links Section
    ├── Organizers Section
    └── Copyright Section
```

---

## 📊 Data Structure

```
lib/conference-data.ts
├── title
├── tagline
├── dates
├── location
├── mission
├── vision
├── objectives[]
├── themes[] (8 items)
│   ├── id
│   ├── title
│   ├── description
│   └── subtopics[]
├── timeline[]
├── registrationFees[]
├── paymentSteps[]
├── notes[]
├── whyAttend[]
├── patrons[] (30+ items)
├── organizingCommittee[]
└── (More fields...)
```

---

## 🔍 Finding Specific Content

### Where to Find...

| Content | File | Line |
|---------|------|------|
| Conference Title | `/lib/conference-data.ts` | ~3 |
| Conference Dates | `/lib/conference-data.ts` | ~4 |
| 8 Themes | `/lib/conference-data.ts` | ~30-80 |
| Patron Names | `/lib/conference-data.ts` | ~160+ |
| Committee Members | `/lib/conference-data.ts` | ~210+ |
| Registration Fees | `/lib/conference-data.ts` | ~120+ |
| Timeline Events | `/lib/conference-data.ts` | ~95+ |
| Why Attend Reasons | `/lib/conference-data.ts` | ~140+ |
| Colors | `/app/globals.css` | ~130+ |
| Navbar Links | `/components/navbar.tsx` | ~10+ |
| Page Title (SEO) | `/app/layout.tsx` | ~8 |
| Main Page Sections | `/app/page.tsx` | ~20+ |

---

## 🚀 Build & Deployment Files

### Generated During Build
```
.next/                      ← Build output
dist/                       ← Distribution files
```

### Required for Deployment
```
package.json               ← Dependencies list
next.config.mjs            ← Next.js config
tsconfig.json              ← TypeScript config
.gitignore                 ← Git ignore rules
```

### Optional for Deployment
```
.eslintrc.json             ← Code linting
.prettierignore            ← Code formatting
jest.config.ts             ← Testing config
```

---

## 📦 Dependencies Structure

```
package.json
├── Scripts
│   ├── dev          → pnpm dev
│   ├── build        → pnpm build
│   ├── start        → pnpm start
│   └── lint         → pnpm lint
│
├── Dependencies (Production)
│   ├── next         → Framework
│   ├── react        → UI Library
│   ├── @vercel/*    → Vercel tools
│   └── [60+ more packages...]
│
└── DevDependencies
    ├── TypeScript
    ├── ESLint
    └── [Auto-handled]
```

---

## 🎯 Quick Navigation

### By Purpose

**📝 Content**
- `/lib/conference-data.ts` - All text content

**🎨 Styling**
- `/app/globals.css` - Colors & fonts
- `/tailwind.config.ts` - Tailwind settings

**🧩 Components**
- `/components/` - All React components
- `/components/sections/` - Page sections

**📱 Pages**
- `/app/page.tsx` - Main page
- `/app/layout.tsx` - Root layout

**🖼️ Assets**
- `/public/` - Images & static files

**📚 Documentation**
- `/*.md` - All docs in root

---

## 💡 Tips for Navigation

### To Find Styling for a Section
1. Find component in `/components/sections/`
2. Look for `className=` attributes
3. Search for colors in `/app/globals.css`

### To Add New Content
1. Open `/lib/conference-data.ts`
2. Add to appropriate array/object
3. Component will auto-render from data

### To Change Layout
1. Edit component in `/components/sections/`
2. Modify HTML structure or Tailwind classes
3. Test locally with `pnpm dev`

### To Deploy
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

---

## 🔐 Security & Backups

### Keep These Safe
- Credentials in environment variables
- API keys (if any)
- Personal information
- Email addresses

### Backup These Files
- `/lib/conference-data.ts` - All content
- `/components/*/` - All code
- Git history - Version control

### Ignore These
- `/node_modules/` - Reinstall from package.json
- `/.next/` - Regenerate on build
- `/.git/cache/` - Auto-managed

---

## 🎯 File Organization Best Practices

### ✅ DO
- Keep content in `conference-data.ts`
- Keep styles in `globals.css`
- Keep components focused & single-purpose
- Update docs when making changes

### ❌ DON'T
- Edit auto-generated files (`.next/`, `node_modules/`)
- Hardcode content in components
- Use inline styles (use Tailwind instead)
- Edit lock files manually

---

## 📊 File Statistics

| Category | Count | Total Lines |
|----------|-------|------------|
| Components | 20+ | 3,000+ |
| Documentation | 8 | 3,500+ |
| Utilities | 5 | 500+ |
| Configuration | 10 | 200+ |
| **Total** | **50+** | **7,000+** |

---

## 🚀 Deployment File Check

Before deploying, ensure:
- ✅ `package.json` exists
- ✅ `next.config.mjs` exists
- ✅ `tsconfig.json` exists
- ✅ `/app/page.tsx` exists
- ✅ `/app/layout.tsx` exists
- ✅ `/public/` has images

All of these are already in place! ✅

---

## 📝 File Naming Conventions

### Components
- `kebab-case.tsx` - Component files
- `PascalCase` - Component names in code

### Styles
- `globals.css` - Global styles
- `.tsx` - Component styles (inline)

### Data
- `conference-data.ts` - Content data
- `utils.ts` - Utility functions

### Documentation
- `UPPERCASE.md` - Documentation files

---

## 🎉 You Now Have Everything!

### ✅ All Files Present
- [x] All React components
- [x] All styling files
- [x] All configuration
- [x] All documentation
- [x] All images generated
- [x] All data structure

### ✅ Ready to
- [x] Run locally
- [x] Edit content
- [x] Customize styling
- [x] Deploy to Vercel
- [x] Share with world

---

## 🔗 Quick Links Within Files

```
├── Start Here
│   └── BUILD_COMPLETE.md
│
├── Learn How-To's
│   └── QUICK_REFERENCE.md
│
├── Setup Instructions
│   └── SETUP_GUIDE.md
│
├── Before Launch
│   └── DEPLOYMENT_CHECKLIST.md
│
├── Full Documentation
│   └── README.md
│
├── Project Overview
│   └── PROJECT_SUMMARY.md
│
├── Find Documentation
│   └── DOCS_INDEX.md
│
└── View File Structure
    └── FILE_TREE.md (this file)
```

---

**Everything is organized, documented, and ready to go!** 🚀

See `DOCS_INDEX.md` for guidance on which file to read next.
