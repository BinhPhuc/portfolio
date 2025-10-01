"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Save, Eye } from "lucide-react"

interface BlogPost {
  id?: string
  title: string
  content: string
  excerpt: string
  slug: string
  published: boolean
}

interface PostFormProps {
  userId: string
  initialData?: BlogPost
}

export function PostForm({ userId, initialData }: PostFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<BlogPost>({
    title: initialData?.title || "",
    content: initialData?.content || "",
    excerpt: initialData?.excerpt || "",
    slug: initialData?.slug || "",
    published: initialData?.published || false,
  })

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: !initialData ? generateSlug(title) : prev.slug,
    }))
  }

  const handleSubmit = async (e: React.FormEvent, asDraft = false) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const postData = {
        ...formData,
        published: asDraft ? false : formData.published,
        user_id: userId,
      }
      // TODO: Replace with actual API call to your backend or database
      // let result
      // if (initialData?.id) {
      //   // Update existing post
      //   result = await supabase.from("blog_posts").update(postData).eq("id", initialData.id).eq("user_id", userId)
      // } else {
      //   // Create new post
      //   result = await supabase.from("blog_posts").insert([postData])
      // }

      // if (result.error) throw result.error

      router.push("/admin/posts")
      router.refresh()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Đã xảy ra lỗi")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="grid gap-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Thông tin cơ bản</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Tiêu đề</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Nhập tiêu đề bài viết..."
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                placeholder="url-bai-viet"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="excerpt">Mô tả ngắn</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Mô tả ngắn gọn về nội dung bài viết..."
                rows={3}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        <Card>
          <CardHeader>
            <CardTitle>Nội dung</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="content">Nội dung (Markdown)</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Viết nội dung bài viết bằng Markdown..."
                rows={20}
                className="font-mono"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Publishing Options */}
        <Card>
          <CardHeader>
            <CardTitle>Tùy chọn xuất bản</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
              />
              <Label htmlFor="published">Xuất bản ngay</Label>
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Đang lưu..." : initialData ? "Cập nhật" : "Xuất bản"}
          </Button>

          <Button type="button" variant="outline" onClick={(e) => handleSubmit(e, true)} disabled={isLoading}>
            <Eye className="mr-2 h-4 w-4" />
            Lưu nháp
          </Button>

          <Button type="button" variant="ghost" asChild>
            <a href="/admin/posts">Hủy</a>
          </Button>
        </div>
      </div>
    </form>
  )
}
