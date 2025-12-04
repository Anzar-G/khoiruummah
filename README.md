# Schola Internationalis Website

Modern, responsive website for Schola Internationalis built with TypeScript, React, Vite, and Tailwind CSS.

## Features

- ✨ **Modern Tech Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- 📱 **Fully Responsive**: Mobile-first design with optimized layouts for all screen sizes
- 🎨 **Custom Design System**: Brand colors (purple & green) with consistent styling
- 🧭 **Smart Navigation**: Responsive sidebar with mobile toggle functionality
- 🚀 **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Mobile Features

- **Sidebar Toggle**: Hamburger menu on mobile devices
- **Slide-in Animation**: Smooth sidebar transitions
- **Backdrop Overlay**: Semi-transparent backdrop when sidebar is open
- **280px Width**: Sidebar doesn't cover entire mobile screen
- **Touch-Optimized**: All interactions optimized for touch devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx        # Main layout with sidebar
│   └── Sidebar.tsx       # Responsive sidebar navigation
├── pages/
│   ├── Home.tsx          # Homepage
│   ├── AboutUs.tsx       # About Us page
│   ├── Academics.tsx     # Academics page
│   ├── Admissions.tsx    # Admissions page
│   ├── StudentLife.tsx   # Student Life page
│   ├── NewsEvents.tsx    # News & Events page
│   └── Contact.tsx       # Contact page
├── App.tsx               # Main app with routing
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Routes

- `/` - Homepage
- `/tentang-kami` - About Us
- `/akademik/*` - Academics
- `/penerimaan` - Admissions
- `/kehidupan-siswa` - Student Life
- `/berita-acara` - News & Events
- `/kontak` - Contact
- `/portal-orang-tua` - Parent Portal
- `/kalender` - School Calendar

## Responsive Breakpoints

- **Mobile**: < 768px (sidebar hidden by default, toggle with hamburger)
- **Desktop**: ≥ 768px (sidebar always visible, fixed position)

## Customization

### Brand Colors

Edit `tailwind.config.js` to customize brand colors:

```js
colors: {
  "brand-purple": "#56357F",
  "brand-green": "#A8CF45",
  // ... other colors
}
```

### Fonts

The project uses **Inter** font family from Google Fonts. To change fonts, edit:

1. `index.html` - Update Google Fonts link
2. `tailwind.config.js` - Update font family configuration

## Technologies Used

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project for Schola Internationalis.
