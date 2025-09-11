import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Facebook,
  Instagram,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import ContactInfo from "@/components/contact-info";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatedSection className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 relative w-[150px] h-[150px] mx-auto">
            <Image
              src="/portfolio.jpg"
              alt="Pham Phuc Binh"
              fill
              className="rounded-full object-cover border-4 border-primary"
              priority
            />
          </div>
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              Available For Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Hi, I'm <span className="text-primary">Pham Phuc Binh</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              I'm a passionate developer who loves creating modern web products
              and great user experiences. Specialized in Next.js, React, Java
              Spring Boot and advanced web technologies.
            </p>
          </div>

          <ContactInfo className="flex items-center justify-center gap-4 mb-12" />

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">
            My Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java Spring Boot",
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "Supabase",
              "Vercel",
              "Docker",
              "Git",
              "Linux",
            ].map((skill) => (
              <Card key={skill} className="text-center p-4">
                <CardContent className="p-0">
                  <p className="font-medium">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">More About Me</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Want to know more about my journey, projects, and blog posts? Feel
            free to explore the links below!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/about">
                About Me
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="group bg-transparent"
            >
              <Link href="/blog">
                My Blog
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </div>
  );
}
