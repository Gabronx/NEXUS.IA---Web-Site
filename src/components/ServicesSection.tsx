"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ServicesSection() {
  const services = [
    {
      title: "Estratégia de IA",
      description: "Desenvolva roteiros abrangentes de transformação de IA adaptados aos seus objetivos de negócios e ao contexto do setor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8"><polygon points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polygon><line x1="12" y1="12" x2="12" y2="21"></line><path d="M12 12 4.5 7.5"></path><line x1="12" y1="12" x2="20" y2="7.5"></line></svg>
      ),
    },
    {
      title: "Transformação de Operações",
      description: "Otimize suas operações com fluxos de trabalho, automação e sistemas de tomada de decisão baseados em IA.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      ),
    },
    {
      title: "Soluções de Sustentabilidade",
      description: "Aproveite a IA para impulsionar práticas comerciais sustentáveis, reduzir o impacto ambiental e atingir metas ESG.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
      ),
    },
    {
      title: "Inteligência e Análise",
      description: "Transforme dados em insights acionáveis ​​com sistemas avançados de inteligência e análises com tecnologia de IA.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-thunder text-background leading-[0.9] mb-16 text-center">
          NOSSO ESTILO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/10 backdrop-blur-sm border-background/20 text-background">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {service.icon}
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-background/80 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
