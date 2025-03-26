"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(true);
      return;
    }

    // In a real application, you would send this to your API
    setIsSubscribed(true);
    setError(false);
    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-primary text-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-thunder text-background leading-[0.9] mb-4">
              CAPITAL INTELECTUAL
            </h2>
            <p className="text-background/80">
              Nossa newsletter que compartilha insights e lições de inovações de IA que geram bilhões.
            </p>
          </div>
          <div className="w-full md:w-auto">
            {isSubscribed ? (
              <div className="bg-background/10 p-4 rounded-lg text-center">
                <p className="text-background font-medium mb-1">Você acabou de ser inscrito.</p>
                <Button
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="bg-transparent border-background text-background hover:bg-background/20 mt-2"
                >
                  Assine outro e-mail
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Insira seu e-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(false);
                    }}
                    className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 h-12 ${error ? "border-red-400" : ""
                      }`}
                  />
                  {error && (
                    <p className="text-red-200 text-sm mt-1">Por favor, insira um endereço de e-mail válido</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="bg-background text-primary hover:bg-background/90 font-medium h-12"
                >
                  Inscrever-se
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
