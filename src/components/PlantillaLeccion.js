"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TarjetaPalabra from "@/components/TarjetaPalabra";

export default function PlantillaLeccion({ emoji, tituloFr, tituloEs, palabras }) {
  const [practicadas, setPracticadas] = useState(
    Array(palabras.length).fill(false)
  );

  const toggle = (i) => {
    setPracticadas((prev) => {
      const copia = [...prev];
      copia[i] = !copia[i];
      return copia;
    });
  };

  const totalPracticadas = practicadas.filter(Boolean).length;
  const porcentaje = Math.round((totalPracticadas / palabras.length) * 100);

  // Mantiene "despierto" el motor de voz de Chrome (bug conocido:
  // se duerme tras unos segundos de inactividad y corta el audio)
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.resume();
      }
    }, 10000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="min-h-screen bg-crema pb-16">
      <header
        className="px-6 pb-5 sticky top-0 bg-crema/95 backdrop-blur-sm z-10 border-b border-cafe/10"
        style={{ paddingTop: "calc(1.25rem + env(safe-area-inset-top))" }}
      >
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="text-cafe font-semibold text-sm">
            ← Retour
          </Link>
          <span className="text-cafe-light text-sm">
            {totalPracticadas}/{palabras.length}
          </span>
        </div>
        <div className="w-full h-2 bg-cafe/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-turquesa transition-all duration-500"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </header>

      <section className="px-6 pt-6 max-w-md mx-auto">
        <h1 className="font-display text-2xl font-semibold text-negro mb-1">
          {emoji} {tituloFr}
        </h1>
        <p className="text-cafe-light text-sm mb-6">{tituloEs}</p>

        <div className="flex flex-col gap-4">
          {palabras.map((item, i) => (
            <TarjetaPalabra
              key={item.es}
              es={item.es}
              fonetica={item.fonetica}
              fr={item.fr}
              frase={item.frase}
              fraseFr={item.fraseFr}
              practicada={practicadas[i]}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}