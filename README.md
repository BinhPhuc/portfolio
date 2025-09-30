# 🚀 Personal Portfolio Template

Welcome to this open-source portfolio template! I created this project with the goal of helping developers, designers, and creators build their professional online presence quickly and easily. This template is free to use, modify, and share - whether you're a junior developer looking to showcase your projects or a senior developer wanting to share your experiences through the integrated blog system.

This modern, responsive portfolio website is built with Next.js and comes with everything you need: from a clean, professional design to a full-featured blog system with authentication. Feel free to customize it to match your personal brand and needs!

![Portfolio Preview](/public/portfolio_preview.png)

## 👩‍💻 Admin Setup

To set up an admin account:

1. First, make sure to update the environment variables in your `.env` file before running the seed script
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Create the admin user by running the seed script:
   ```bash
   npm run db:seed
   ```

This will create an admin user that you can use to access the admin dashboard.

## ✨ Features

- **🏠 Homepage**: Clean, modern landing page with hero section and skills showcase
- **👤 About Page**: Interactive timeline showcasing career milestones and achievements
- **📝 Blog System**: Full-featured blog with Markdown support and syntax highlighting
- **🔐 Authentication**: Secure login/register system powered by Better Auth
- **⚡ Admin Dashboard**: Protected admin panel for managing blog posts (CRUD operations)
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **🔒 Security**: Advanced authentication and authorization patterns

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [Better Auth](https://www.better-auth.com/) for authentication and session management
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font)
## 📁 Project Structure

```bash
├── app/                   
│   ├── (auth)/           
│   │   ├── login/
│   │   ├── sign-up/
│   │   └── error/
│   ├── admin/            
│   │   └── posts/       
│   ├── blog/           
│   │   └── [slug]/      
│   ├── about/           
│   └── globals.css       
├── components/        
│   ├── ui/             
│   ├── admin/       
│   ├── navigation.tsx    
│   └── theme-provider.tsx
├── lib/                
│   └── auth/        
├── scripts/             
└── hooks/               
```
