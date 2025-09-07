import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Award, Code, Briefcase } from "lucide-react"

const timelineData = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Startup",
    location: "Ho Chi Minh City, Vietnam",
    type: "work",
    description:
      "Dẫn dắt team phát triển các ứng dụng web hiện đại sử dụng Next.js, React và Node.js. Tối ưu hóa performance và trải nghiệm người dùng.",
    achievements: ["Tăng 40% performance của ứng dụng chính", "Dẫn dắt team 5 developers", "Triển khai CI/CD pipeline"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Digital Agency",
    location: "Ho Chi Minh City, Vietnam",
    type: "work",
    description:
      "Phát triển các website và ứng dụng web cho khách hàng doanh nghiệp. Chuyên về React ecosystem và backend APIs.",
    achievements: ["Hoàn thành 15+ dự án thành công", "Giảm 60% thời gian load trang", "Tích hợp thanh toán online"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "E-commerce Company",
    location: "Ho Chi Minh City, Vietnam",
    type: "work",
    description:
      "Tập trung vào phát triển giao diện người dùng cho nền tảng thương mại điện tử. Làm việc với React và các thư viện UI hiện đại.",
    achievements: ["Xây dựng component library", "Tăng 25% conversion rate", "Responsive design cho mobile"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    year: "2021",
    title: "Tốt nghiệp Đại học",
    company: "Đại học Công nghệ Thông tin",
    location: "Ho Chi Minh City, Vietnam",
    type: "education",
    description:
      "Tốt nghiệp ngành Công nghệ Thông tin với điểm số xuất sắc. Chuyên sâu về phát triển phần mềm và cơ sở dữ liệu.",
    achievements: ["Điểm trung bình: 8.5/10", "Đồ án tốt nghiệp: Điểm A", "Học bổng sinh viên giỏi"],
    technologies: ["Java", "C++", "MySQL", "HTML/CSS"],
  },
  {
    year: "2020",
    title: "Intern Developer",
    company: "Software Company",
    location: "Ho Chi Minh City, Vietnam",
    type: "work",
    description: "Thực tập sinh phát triển phần mềm, học hỏi về quy trình phát triển chuyên nghiệp và làm việc nhóm.",
    achievements: ["Hoàn thành dự án thực tập", "Học về Agile/Scrum", "Nhận offer full-time"],
    technologies: ["JavaScript", "PHP", "MySQL", "Git"],
  },
]

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "PostgreSQL"] },
  { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
]

export default function AboutPage() {
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
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về trang chủ
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Về tôi</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hành trình phát triển của một developer đam mê công nghệ và không ngừng học hỏi
            </p>
          </div>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Kỹ năng & Công nghệ</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <h2 className="text-2xl font-bold mb-12 text-center">Hành trình sự nghiệp</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                    {/* Content */}
                    <div className="md:ml-16">
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="flex items-center gap-2">
                              {item.type === "work" ? <Briefcase className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                              {item.title}
                            </CardTitle>
                            <Badge variant="outline">{item.year}</Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">{item.company}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{item.description}</p>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Thành tích chính:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {item.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-medium mb-2">Công nghệ sử dụng:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Hãy kết nối với tôi!</h3>
              <p className="text-muted-foreground mb-6">
                Tôi luôn sẵn sàng thảo luận về các dự án thú vị và cơ hội hợp tác mới.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/blog">Đọc Blog của tôi</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:hello@example.com">Liên hệ với tôi</Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
