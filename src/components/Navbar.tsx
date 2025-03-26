"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-foreground text-xl font-thunder tracking-tight">
          NEXUS AI
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-t border-border">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link href="/about" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/work" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Work
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
