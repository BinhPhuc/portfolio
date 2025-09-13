import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostForm } from "@/components/admin/post-form";

export default async function NewPostPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/admin/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về danh sách bài viết
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Tạo bài viết mới</h1>
            <p className="text-muted-foreground">
              Viết và xuất bản bài blog mới của bạn
            </p>
          </div>

          <PostForm userId={data.user.id} />
        </div>
      </div>
    </div>
  );
}
