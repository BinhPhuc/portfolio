import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="text-xl font-bold text-foreground">
              Portfolio Admin
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {session.user.email}
              </span>
              <form action="/auth/signout" method="post">
                <Button variant="outline" size="sm" type="submit">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
