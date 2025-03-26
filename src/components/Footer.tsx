"use client";

import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 md:order-2 mb-8 md:mb-0">
            <a href="#" className="w-12 h-12 rounded-full bg-white-800 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <IconBrandInstagram size={24} stroke={1.5} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white-800 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <IconBrandTwitter size={24} stroke={1.5} />
            </a>
          </div>
          <div className="md:order-1 text-center md:text-left">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Nexus AI Consulting
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
