"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-primary/10">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-thunder text-foreground leading-[0.9] mb-8">
          INTERESSADO EM TRABALHAR CONOSCO?
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
          Seja você uma empresa da Fortune 500 ou uma startup emergente, estamos prontos para ajudar você a aproveitar o poder da IA ​​para transformar seu negócio.
        </p>
        <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-4 py-4 h-auto text-sm md:px-8 md:py-6 md:text-base
             xs:px-4 xs:py-3 xs:text-xs">
          <Link href="#">
            Entre em contato
            <svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  );
}
