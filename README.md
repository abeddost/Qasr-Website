# Qasr Möbelhaus Website

A modern, SEO-friendly website for Qasr Möbelhaus built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌐 Fully translated to German
- 📱 Mobile-friendly
- 🔍 SEO optimized with metadata, sitemap, and structured data
- 🗺️ Google Maps integration
- ⚡ Fast performance with Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Homepage
│   ├── kollektionen/     # Collections page
│   ├── ueber-uns/        # About Us page
│   ├── kontakt/          # Contact page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── HeroSlider.tsx    # Hero carousel
│   ├── ProductGrid.tsx   # Product grid
│   └── GoogleMap.tsx     # Google Maps component
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Contact info, social links
│   └── translations.ts  # German translations
└── public/               # Static assets
    ├── images/          # Product images
    └── logo.png         # Company logo
```

## Build for Production

```bash
npm run build
npm start
```

## Contact Information

- **Company**: Qasr Möbelhaus
- **Address**: Industriestraße 17, 65474 Bischofsheim
- **Phone**: +49 176 83016753
- **Email**: qasrmobelhaus7@gmail.com

## License

All rights reserved © 2025 Qasr Möbelhaus




