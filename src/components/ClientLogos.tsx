"use client";

import Image from "next/image";

export function ClientLogos() {
  const logos = [
    {
      name: "Microsoft",
      src: "https://ext.same-assets.com/709160556/3367455501.png",
    },
    {
      name: "Deloitte",
      src: "https://ext.same-assets.com/709160556/810254526.png",
    },
    {
      name: "McKinsey",
      src: "https://ext.same-assets.com/709160556/2555129931.png",
    },
    {
      name: "BCG",
      src: "https://ext.same-assets.com/709160556/1289870675.png",
    },
    {
      name: "Goldman Sachs",
      src: "https://ext.same-assets.com/709160556/222971740.png",
    },
    {
      name: "JP Morgan",
      src: "https://ext.same-assets.com/709160556/191024935.png",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center grayscale opacity-60">
          {logos.map((logo) => (
            <div key={logo.name} className="w-24 h-24 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={120}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
