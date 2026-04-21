# Sravanti Pusuluru - Portfolio

A modern, luxury-themed portfolio website showcasing professional experience as a Python Developer with expertise in backend APIs, serverless architectures, and cloud solutions.

## Features

- **Responsive Design**: Fully responsive across all devices with elegant animations
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Interactive Sections**:
  - Hero section with typewriter effect and profile image
  - About section with animated counters and tech stack icons
  - Timeline-based experience showcase
  - Swiper carousel for featured projects
  - Categorized skills with hover effects
  - Certification cards with shimmer animations
  - Contact form with confetti celebration
- **Smooth Animations**: Powered by Framer Motion and AOS
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Parallax Background**: Full-page parallax effect for premium feel

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Advanced animations
- **Swiper** - Carousel component
- **React Type Animation** - Typewriter effect
- **AOS** - Scroll animations
- **Shadcn UI** - Component library

## Color Palette

The portfolio uses a luxurious neutral color scheme:

- **Primary**: Obsidian Black (hsl(210, 10%, 8%))
- **Accent**: Soft Camel (hsl(35, 20%, 65%))
- **Secondary**: Vintage Cream (hsl(45, 25%, 88%))
- **Surface**: Antique Charcoal (hsl(210, 9%, 16%))

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/           # Page components
└── index.css        # Design system & global styles
```

## Design System

All colors, animations, and styles are defined in `src/index.css` and `tailwind.config.ts`. The design follows semantic token patterns for easy customization and maintains consistency across all components.

## Customization

To customize the portfolio:

1. Update personal information in component files
2. Replace placeholder images in `src/assets/`
3. Add your resume PDF to `public/assets/resume.pdf`
4. Modify colors in `src/index.css` (use HSL format only)
5. Adjust animations in `tailwind.config.ts`

## Contact

- **Email**: reddysravanthi911@gmail.com
- **LinkedIn**: [Sravanti Pusuluru](https://linkedin.com/in/sravanti-pusuluru)
- **Location**: Fairfield, CT

## License

© 2025 Sravanti Pusuluru. All rights reserved.
