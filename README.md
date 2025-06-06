# ATM Constructions - Website

A professional landing page for ATM Constructions, a residential and commercial renovation company. This website showcases the company's services, testimonials, and provides a way for potential clients to get in touch.

![ATM Constructions Website](/public/assets/images/nextjs-landing-page-banner.png)

## Overview

This website was built using Next.js and Tailwind CSS to create a modern, responsive landing page for a construction business. The site features:

- Hero section with a professional background image and call-to-action
- Services section highlighting residential and commercial renovation offerings
- Testimonials from satisfied clients
- Contact information and social media links
- Mobile-responsive design

## Technologies Used

- **Next.js 14+**: React framework for server-rendered applications
- **Tailwind CSS 3**: Utility-first CSS framework for rapid UI development
- **TypeScript**: For type safety and improved developer experience
- **ESLint & Prettier**: Code quality and formatting tools

## Project Structure

```
.
├── public/               # Static assets
│   └── assets/
│       └── images/       # Image files used throughout the site
├── src/
│   ├── background/       # Background component
│   ├── button/           # Button component
│   ├── cta/              # Call-to-action component
│   ├── feature/          # Feature component for services section
│   ├── footer/           # Footer components
│   ├── hero/             # Hero section component
│   ├── layout/           # Layout components
│   ├── navigation/       # Navigation components
│   ├── pages/            # Next.js pages
│   ├── styles/           # Global styles with Tailwind
│   ├── templates/        # Page templates
│   └── utils/            # Utility functions and configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Features

1. **Professional Hero Section**: Features a high-quality background image with overlay gradients and a prominent call-to-action button.

2. **Services Showcase**: Highlights both residential and commercial renovation services with descriptive text and relevant imagery.

3. **Client Testimonials**: Displays feedback from satisfied customers to build trust with potential clients.

4. **Mobile Responsive**: Fully responsive design that works well on devices of all sizes.

5. **Contact Information**: Easily accessible phone number and contact form for potential clients to reach out.

## Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to see the website in action.

## Customization

To customize this website for your needs:

1. Update the content in the template files under `src/templates/`
2. Replace images in `public/assets/images/` with your own
3. Modify the configuration in `src/utils/AppConfig.ts`
4. Adjust colors and styling in `tailwind.config.js` and `src/styles/global.css`

## Deployment

This site can be easily deployed to platforms like Netlify, Vercel, or any hosting service that supports Next.js applications.

## License

This project is licensed under the MIT License.

---

Created for ATM Constructions | © 2024