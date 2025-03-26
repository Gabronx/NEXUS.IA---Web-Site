"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function ValueProposition() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-thunder text-foreground leading-[0.9] mb-8">
              NÃO APENAS FAZEMOS NOSSOS CLIENTES <span className="text-primary">SE DESTACAREM</span>.
              <br />
              NÓS OS AJUDAMOS A ESTABELECER O PADRÃO.
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg text-foreground/80 mb-8">
                Ao combinar tecnologias de IA de ponta com princípios estratégicos atemporais, ajudamos empresas a transformar suas operações e criar vantagens competitivas sustentáveis.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Algumas consultorias medem o sucesso pelo número de slides de PowerPoint que produzem. Nós medimos o sucesso pelo impacto mensurável que criamos para nossos clientes.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Não temos tantos clientes que não consigamos lembrar de todos. Em vez disso, temos clientes cujas transformações são impossíveis de esquecer.
              </p>
              <Button asChild className="rounded-full bg-transparent border border-foreground hover:bg-foreground hover:text-background text-foreground px-4 md:px-8 py-4 md:py-6 h-auto md:text-base text-sm transition-colors">
                <Link href="#">
                  Como trabalhamos
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
          <div className="md:col-span-4 flex flex-col justify-center">
            <blockquote className="bg-foreground/5 p-8 rounded-lg border border-border mb-6">
              <p className="text-foreground/80 italic mb-4">
                "A Nexus AI reinventou completamente o fluxo de trabalho das nossas operações, ajudando-nos a atingir um aumento de 300% na produtividade e reduzindo os custos em 40%."
              </p>
              <footer className="text-sm">
                <strong className="text-foreground">Fabio Gabriel</strong>
                <p className="text-foreground/60">CTO, empresa MOSHROOM CO.</p>
              </footer>
            </blockquote>
            <blockquote className="bg-foreground/5 p-8 rounded-lg border border-border">
              <p className="text-foreground/80 italic mb-4">
                "A estratégia de transformação de IA não apenas automatizou nossos processos, mas também mudou fundamentalmente a maneira como entendemos nossos clientes e entregamos valor."
              </p>
              <footer className="text-sm">
                <strong className="text-foreground">Rafael Bridaroli</strong>
                <p className="text-foreground/60">CEO, Startup de tecnologia emergente</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
