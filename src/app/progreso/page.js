"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NIVELES = [
  { nombre: "Principiante", emoji: "🌱", bg: "bg-turquesa", texto: "text-white", barra: "bg-turquesa",
    slugs: ["saludos","presentarse","numeros","clima","colores","animales","hora","objetos","profesiones","deportes"] },
  { nombre: "Intermedio", emoji: "🌿", bg: "bg-amarillo", texto: "text-cafe", barra: "bg-amarillo",
    slugs: ["familia","comida","casa","dias","cuerpo","ropa","supermercado","escuela","estaciones","muebles"] },
  { nombre: "Avanzado", emoji: "🌳", bg: "bg-cafe", texto: "text-white", barra: "bg-cafe",
    slugs: ["compras","transporte","trabajo","emociones","salud","viajes","finanzas","tecnologia","pasatiempos","cocina"] },
  { nombre: "Experto", emoji: "🏆", bg: "bg-negro", texto: "text-white", barra: "bg-negro",
    slugs: ["conversaciones","dichos","restaurante","vida-laboral","modismos","cita-medica","tramites","humor","invitaciones","despedidas"] },
];

function formatearTitulo(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (letra) => letra.toUpperCase());
}

export default function ProgresoPage() {
  const [completadas, setCompletadas] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const nuevasCompletadas = {};
    NIVELES.forEach((nivel) => {
      nivel.slugs.forEach((slug) => {
        try {
          const guardado = localStorage.getItem(`francenol-progreso/lecciones/${slug}`);
          if (guardado) {
            const arr = JSON.parse(guardado);
            if (Array.isArray(arr) && arr.length > 0 && arr.every(Boolean)) {
              nuevasCompletadas[slug] = true;
            }
          }
        } catch (e) {
          // si algo sale mal leyendo, simplemente no se marca como completada
        }
      });
    });
    setCompletadas(nuevasCompletadas);
    setCargando(false);
  }, []);

  const totalLecciones = NIVELES.reduce((suma, nivel) => suma + nivel.slugs.length, 0);
  const totalCompletadas = Object.keys(completadas).length;
  const porcentajeGeneral = Math.round((totalCompletadas / totalLecciones) * 100);

  return (
    <main className="min-h-screen relative">
      {/* Mismo fondo que la página principal */}
      <div className="fixed inset-0 bg-crema -z-20" />
      <div
        className="fixed inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none -z-10"
        style={{ backgroundImage: "url('/fondo-banderas.png')" }}
      />

      <div
        className="px-6 pb-16 max-w-md mx-auto"
        style={{ paddingTop: "calc(1.25rem + env(safe-area-inset-top))" }}
      >
        <Link href="/" className="inline-flex items-center gap-1 text-cafe font-display font-semibold mb-6">
          ← Volver
        </Link>

        {cargando ? (
          <p className="text-cafe font-semibold">Cargando progreso...</p>
        ) : (
          <>
            <h1 className="font-display text-3xl font-semibold text-negro mb-1">Mi progreso</h1>
            <p className="text-cafe-light mb-6">
              {totalCompletadas} de {totalLecciones} lecciones completadas
            </p>

            <div className="bg-white/90 rounded-2xl p-4 shadow-md mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-display font-semibold text-negro">Progreso general</span>
                <span className="font-display font-bold text-turquesa-dark">{porcentajeGeneral}%</span>
              </div>
              <div className="w-full bg-cafe/10 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full rounded-full bg-turquesa transition-all duration-500"
                  style={{ width: `${porcentajeGeneral}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {NIVELES.map((nivel) => {
                const completadasEnNivel = nivel.slugs.filter((slug) => completadas[slug]).length;
                const porcentajeNivel = Math.round((completadasEnNivel / nivel.slugs.length) * 100);

                return (
                  <div key={nivel.nombre} className="bg-white/90 rounded-2xl p-4 shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`inline-flex items-center gap-2 ${nivel.bg} ${nivel.texto} rounded-full px-3 py-1 font-display font-semibold text-sm`}>
                        <span>{nivel.emoji}</span>
                        <span>{nivel.nombre}</span>
                      </span>
                      <span className="text-sm font-semibold text-cafe-light">
                        {completadasEnNivel}/{nivel.slugs.length}
                      </span>
                    </div>

                    <div className="w-full bg-cafe/10 rounded-full h-2.5 overflow-hidden mb-4">
                      <div
                        className={`h-full rounded-full ${nivel.barra} transition-all duration-500`}
                        style={{ width: `${porcentajeNivel}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {nivel.slugs.map((slug) => {
                        const hecha = completadas[slug];
                        return (
                          <Link
                            key={slug}
                            href={`/lecciones/${slug}`}
                            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                              hecha ? `${nivel.bg} ${nivel.texto}` : "bg-crema text-cafe"
                            }`}
                          >
                            <span>{hecha ? "⭐" : "⚪"}</span>
                            <span className="truncate">{formatearTitulo(slug)}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
}