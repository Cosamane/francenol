"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TarjetaPalabra from "@/components/TarjetaPalabra";
import { actualizarRacha } from "@/utils/racha";

export default function PlantillaLeccion({ emoji, tituloFr, tituloEs, palabras }) {
  const pathname = usePathname();
  const claveGuardado = `francenol-progreso${pathname}`;

  const [practicadas, setPracticadas] = useState(
    Array(palabras.length).fill(false)
  );

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(claveGuardado);
      if (guardado) {
        const arr = JSON.parse(guardado);
        if (Array.isArray(arr) && arr.length === palabras.length) {
          setPracticadas(arr);
        }
      }
    } catch (e) {
      // si algo sale mal leyendo, simplemente empieza de cero
    }
  }, [claveGuardado, palabras.length]);

  const toggle = (i) => {
    setPracticadas((prev) => {
      const copia = [...prev];
      copia[i] = !copia[i];
      try {
        localStorage.setItem(claveGuardado, JSON.stringify(copia));
      } catch (e) {
        // si el navegador bloquea localStorage, no truena la app
      }
      // Solo suma a la racha cuando SE MARCA como practicada (no al desmarcar)
      if (copia[i]) {
        actualizarRacha();
      }
      return copia;
    });
  };

  const totalPracticadas = practicadas.filter(Boolean).length;
  const porcentaje = Math.round((totalPracticadas / palabras.length) * 100);
  const leccionCompleta = totalPracticadas === palabras.length && palabras.length > 0;

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

        {leccionCompleta && (
          <div className="bg-turquesa/10 border-2 border-turquesa rounded-2xl p-6 mb-6 text-center">
            <div className="text-3xl mb-2">⭐⭐⭐⭐⭐</div>
            <p className="font-display text-lg font-semibold text-turquesa-dark mb-1">
              ¡Lección completada!
            </p>
            <p className="text-sm text-cafe-light">
              Practicaste todas las palabras. ¡Muy bien! 🎉
            </p>
          </div>
        )}

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