import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  CirclePlus as PlusCircle,
  CreditCard as Edit,
  Eye,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export default async function AdminPostsPage() {
  const session = await auth.api.getSession({
    headers: headers(),
  });
  
  if (!session) {
    redirect("/auth/login");
  }

  const blogPosts: any[] = [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Posts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Quản lý bài viết</h1>
              <p className="text-muted-foreground">
                Tổng cộng {blogPosts.length} bài viết
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/posts/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Tạo bài viết mới
              </Link>
            </Button>
          </div>

          {blogPosts.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Danh sách bài viết</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tiêu đề</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ngày tạo</TableHead>
                      <TableHead>Cập nhật</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{post.title}</div>
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {post.excerpt}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={post.published ? "default" : "secondary"}
                          >
                            {post.published ? "Đã xuất bản" : "Bản nháp"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(post.created_at), {
                            addSuffix: true,
                            locale: vi,
                          })}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(post.updated_at), {
                            addSuffix: true,
                            locale: vi,
                          })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {post.published && (
                              <Button variant="ghost" size="sm" asChild>
                                <Link
                                  href={`/blog/${post.slug}`}
                                  target="_blank"
                                >
                                  <Eye className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/admin/posts/${post.id}/edit`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            {/* <DeletePostButton
                              postId={post.id}
                              postTitle={post.title}
                            /> */}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <Card className="text-center py-16">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">
                  Chưa có bài viết nào
                </h3>
                <p className="text-muted-foreground mb-8">
                  Hãy bắt đầu bằng cách tạo bài viết đầu tiên của bạn!
                </p>
                <Button asChild>
                  <Link href="/admin/posts/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Tạo bài viết mới
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
