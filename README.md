# 🚀 Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, featuring a blog system with authentication and admin dashboard.

![Portfolio Preview](/public/portfolio_preview.png)

## ✨ Features

- **🏠 Homepage**: Clean, modern landing page with hero section and skills showcase
- **👤 About Page**: Interactive timeline showcasing career milestones and achievements
- **📝 Blog System**: Full-featured blog with Markdown support and syntax highlighting
- **🔐 Authentication**: Secure login/register system powered by Supabase Auth
- **⚡ Admin Dashboard**: Protected admin panel for managing blog posts (CRUD operations)
- **🌙 Dark Mode**: System-aware theme switching with manual toggle
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **🔒 Security**: Row Level Security (RLS) policies for data protection

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: [Supabase Auth](https://supabase.com/auth)
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font)

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── login/
│   │   ├── sign-up/
│   │   └── error/
│   ├── admin/             # Protected admin dashboard
│   │   └── posts/         # Blog post management
│   ├── blog/              # Public blog pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── about/             # About page with timeline
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── admin/            # Admin-specific components
│   ├── navigation.tsx    # Main navigation with theme toggle
│   └── theme-provider.tsx # Theme context provider
├── lib/                  # Utility functions
│   └── supabase/         # Supabase client configuration
├── scripts/              # Database migration scripts
└── hooks/                # Custom React hooks
\`\`\`
