"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thunder text-foreground leading-[0.9] mb-8">
          VOCÊ PODE NÃO SABER NOSSO NOME, MAS JÁ VIU NOSSO IMPACTO
        </h1>
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Interrompendo a consultoria tradicional com soluções de estratégia, operações, sustentabilidade e inteligência baseadas em IA
          </p>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-4 py-4 h-auto text-sm md:px-8 md:py-6 md:text-base
             xs:px-4 xs:py-3 xs:text-xs">
            <Link href="#">
              Explore nossos serviços
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
      </div>
    </section>
  );
}
