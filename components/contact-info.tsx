import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactInfo({className}: {className?: string}) {
  return (
    <div className={className}>
      <Button variant="outline" size="icon" asChild>
        <Link href="https://www.facebook.com/binh.phuc.737448" target="_blank">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Facebook</span>
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href="https://www.instagram.com/binhpphuc/" target="_blank">
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href="https://github.com/BinhPhuc" target="_blank">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link
          href="https://www.linkedin.com/in/b%C3%ACnh-ph%E1%BA%A1m-361708326/"
          target="_blank"
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href="mailto:pham.phuc.binh.271106@gmail.com">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  );
}
