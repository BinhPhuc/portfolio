import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PostForm } from "@/components/admin/post-form"

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch the post to edit
  const { data: post, error: postError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .eq("user_id", data.user.id)
    .single()

  if (postError || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="text-xl font-bold text-foreground">
              Portfolio Admin
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{data.user.email}</span>
              <form action="/auth/signout" method="post">
                <Button variant="outline" size="sm" type="submit">
                  Đăng xuất
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/admin/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về danh sách bài viết
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Chỉnh sửa bài viết</h1>
            <p className="text-muted-foreground">Cập nhật nội dung bài viết "{post.title}"</p>
          </div>

          {/* Post Form */}
          <PostForm userId={data.user.id} initialData={post} />
        </div>
      </div>
    </div>
  )
}
