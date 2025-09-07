import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, ArrowLeft } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          {/* Back Button */}
          <Button variant="ghost" asChild className="self-start">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về trang chủ
            </Link>
          </Button>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Cảm ơn bạn đã đăng ký!</CardTitle>
              <CardDescription>Kiểm tra email để xác nhận tài khoản</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Bạn đã đăng ký thành công. Vui lòng kiểm tra email để xác nhận tài khoản trước khi đăng nhập.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild>
                  <Link href="/auth/login">Đến trang đăng nhập</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Về trang chủ</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
