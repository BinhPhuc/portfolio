"use client";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactInfo from "@/components/contact-info";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={handleNavigate}
              className={`
                text-lg px-4 py-2 rounded-md transition-colors
                ${
                  pathname === route.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-muted"
                }
              `}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-8 left-8 right-8">
          <div className="space-y-4">
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium mb-3">Connect with me</h4>
              <ContactInfo className="flex gap-2" />
            </div>
            <Button className="w-full" asChild>
              <Link href="/about" onClick={handleNavigate}>
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
