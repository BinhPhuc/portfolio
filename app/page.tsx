import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              Available for work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Xin chào, tôi là <span className="text-primary">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Tôi là một developer đam mê tạo ra những sản phẩm web hiện đại và trải nghiệm người dùng tuyệt vời. Chuyên
              về Next.js, React và các công nghệ web tiên tiến.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">Kỹ năng chính</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Vercel"].map(
              (skill) => (
                <Card key={skill} className="text-center p-4">
                  <CardContent className="p-0">
                    <p className="font-medium">{skill}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Tìm hiểu thêm về tôi</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Khám phá hành trình phát triển của tôi, các dự án đã thực hiện và những bài viết chia sẻ kinh nghiệm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/about">
                Về tôi
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="group bg-transparent">
              <Link href="/blog">
                Blog của tôi
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">© 2024 Portfolio. Được xây dựng với Next.js và Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
