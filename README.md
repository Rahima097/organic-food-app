# Organic Food E-Commerce Website

A modern, responsive e-commerce website built with Next.js 15 featuring organic food products. The application includes public product browsing, user authentication, and protected product management functionality.

## Features

- **Landing Page**: Hero section, product highlights, and navigation
- **Product Catalog**: Browse and view detailed product information
- **User Authentication**: Secure login/logout with NextAuth.js
- **Protected Dashboard**: Add new products (authenticated users only)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean design with organic green color scheme

## Technologies Used

- **Next.js 15** (App Router)
- **React 19**
- **NextAuth.js** for authentication
- **Tailwind CSS 4** for styling
- **React Hook Form + Zod** for form validation
- **Lucide React** for icons
- **LocalStorage** for data persistence (development)

## Setup & Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd organic-food-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Variables (Optional)**
   Create a `.env.local` file for production features:
   \`\`\`env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Route Summary

### Public Routes
- **`/`** - Landing page with hero, product highlights, and navigation
- **`/products`** - Product listing page showing all available products
- **`/products/[id]`** - Individual product details page
- **`/login`** - User authentication page

### Protected Routes
- **`/dashboard/add-product`** - Add new products (requires authentication)

### API Routes
- **`/api/auth/[...nextauth]`** - NextAuth authentication endpoints
- **`/api/products`** - Product data management

## Project Structure

\`\`\`
├── app/
│   ├── api/auth/[...nextauth]/
│   ├── dashboard/add-product/     # Protected product management
│   ├── login/                     # Authentication page
│   ├── products/                  # Product listing and details
│   ├── globals.css               # Global styles and design tokens
│   ├── layout.js                 # Root layout with navigation
│   └── page.js                   # Landing page
├── components/
│   ├── navbar.js                 # Navigation component
│   ├── hero.js                   # Hero section
│   ├── product-highlights.js     # Featured products
│   └── footer.js                 # Footer component
└── lib/
    ├── mongodb.js                 # mongodb configuration
\`\`\`

## Key Features

### Authentication
- Secure login/logout functionality
- Protected routes with automatic redirects
- Session management with NextAuth.js

### Product Management
- Browse products with filtering and search
- Detailed product views with images and descriptions
- Add new products (authenticated users only)
- Responsive product cards with pricing

### Design System
- Organic green color palette (#15803d primary, #84cc16 accent)
- Consistent typography and spacing
- Mobile-first responsive design
- Accessible UI components

## Development Notes

- Currently uses localStorage for data persistence
- Ready for database integration (PostgreSQL/MongoDB)
- Includes form validation and error handling
- Optimized for performance and SEO

## Deployment

The application is ready for deployment on Vercel, Netlify, or any Node.js hosting platform. For production use, configure proper environment variables and database connections.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
