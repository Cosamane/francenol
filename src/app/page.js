"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BurbujaHolaBonjour from "@/components/BurbujaHolaBonjour";
import { leerRacha } from "@/utils/racha";

const niveles = [
  { id: "principiante", nombre: "Principiante", emoji: "🌱", bg: "bg-turquesa", texto: "text-white" },
  { id: "intermedio", nombre: "Intermedio", emoji: "🌿", bg: "bg-amarillo", texto: "text-cafe" },
  { id: "avanzado", nombre: "Avanzado", emoji: "🌳", bg: "bg-cafe", texto: "text-white" },
  { id: "experto", nombre: "Experto", emoji: "🏆", bg: "bg-negro", texto: "text-white" },
];

const lecciones = [
  { icon: "👋", fr: "Salutations", es: "Saludos", slug: "saludos", nivel: "principiante" },
  { icon: "🙋", fr: "Se présenter", es: "Presentarse", slug: "presentarse", nivel: "principiante" },
  { icon: "🔢", fr: "Les nombres", es: "Números", slug: "numeros", nivel: "principiante" },
  { icon: "☀️", fr: "La météo", es: "El clima", slug: "clima", nivel: "principiante" },
  { icon: "🎨", fr: "Les couleurs", es: "Colores", slug: "colores", nivel: "principiante" },
  { icon: "🐾", fr: "Les animaux", es: "Animales", slug: "animales", nivel: "principiante" },
  { icon: "🕐", fr: "L'heure", es: "La hora", slug: "hora", nivel: "principiante" },
  { icon: "🪑", fr: "Objets du quotidien", es: "Objetos cotidianos", slug: "objetos", nivel: "principiante" },
  { icon: "👩‍⚕️", fr: "Les métiers", es: "Profesiones", slug: "profesiones", nivel: "principiante" },
  { icon: "⚽", fr: "Les sports", es: "Deportes", slug: "deportes", nivel: "principiante" },
  { icon: "👨‍👩‍👧", fr: "La famille", es: "Familia", slug: "familia", nivel: "intermedio" },
  { icon: "🍲", fr: "La nourriture", es: "Comida", slug: "comida", nivel: "intermedio" },
  { icon: "🏠", fr: "La maison", es: "Casa", slug: "casa", nivel: "intermedio" },
  { icon: "📅", fr: "Les jours", es: "Días y fechas", slug: "dias", nivel: "intermedio" },
  { icon: "🧍", fr: "Le corps", es: "Cuerpo", slug: "cuerpo", nivel: "intermedio" },
  { icon: "👕", fr: "Les vêtements", es: "Ropa", slug: "ropa", nivel: "intermedio" },
  { icon: "🛒", fr: "Le supermarché", es: "El supermercado", slug: "supermercado", nivel: "intermedio" },
  { icon: "🎒", fr: "L'école", es: "Escuela y estudios", slug: "escuela", nivel: "intermedio" },
  { icon: "🍂", fr: "Les saisons", es: "Estaciones del año", slug: "estaciones", nivel: "intermedio" },
  { icon: "🛋️", fr: "Les meubles", es: "Muebles y decoración", slug: "muebles", nivel: "intermedio" },
  { icon: "🛍️", fr: "Les achats", es: "Compras", slug: "compras", nivel: "avanzado" },
  { icon: "🚌", fr: "Les transports", es: "Transporte", slug: "transporte", nivel: "avanzado" },
  { icon: "💼", fr: "Le travail", es: "Trabajo", slug: "trabajo", nivel: "avanzado" },
  { icon: "😊", fr: "Les émotions", es: "Emociones", slug: "emociones", nivel: "avanzado" },
  { icon: "🏥", fr: "La santé", es: "Salud", slug: "salud", nivel: "avanzado" },
  { icon: "✈️", fr: "Les voyages", es: "Viajes", slug: "viajes", nivel: "avanzado" },
  { icon: "💰", fr: "Les finances personnelles", es: "Finanzas personales", slug: "finanzas", nivel: "avanzado" },
  { icon: "📱", fr: "La technologie", es: "Tecnología", slug: "tecnologia", nivel: "avanzado" },
  { icon: "🎨", fr: "Les passe-temps", es: "Pasatiempos", slug: "pasatiempos", nivel: "avanzado" },
  { icon: "🍳", fr: "La cuisine", es: "Cocina y recetas", slug: "cocina", nivel: "avanzado" },
  { icon: "💬", fr: "Conversations de base", es: "Conversaciones básicas", slug: "conversaciones", nivel: "experto" },
  { icon: "🗣️", fr: "Expressions courantes", es: "Dichos y frases coloquiales", slug: "dichos", nivel: "experto" },
  { icon: "🍽️", fr: "Au restaurant", es: "En el restaurante", slug: "restaurante", nivel: "experto" },
  { icon: "💻", fr: "La vie au travail", es: "Vida laboral", slug: "vida-laboral", nivel: "experto" },
  { icon: "💭", fr: "Expressions idiomatiques", es: "Modismos mexicanos", slug: "modismos", nivel: "experto" },
  { icon: "🩺", fr: "Le rendez-vous médical", es: "Cita médica formal", slug: "cita-medica", nivel: "experto" },
  { icon: "📋", fr: "Les démarches administratives", es: "Trámites y burocracia", slug: "tramites", nivel: "experto" },
  { icon: "😄", fr: "L'humour mexicain", es: "Bromas y humor mexicano", slug: "humor", nivel: "experto" },
  { icon: "🎉", fr: "Les invitations", es: "Invitaciones sociales", slug: "invitaciones", nivel: "experto" },
  { icon: "👋", fr: "Adieux et remerciements", es: "Despedidas y agradecimientos", slug: "despedidas", nivel: "experto" },
];

export default function Home() {
  const [completadas, setCompletadas] = useState({});
  const [racha, setRacha] = useState({ dias: 0 });

  useEffect(() => {
    setRacha(leerRacha());
  }, []);

  useEffect(() => {
    const nuevasCompletadas = {};
    lecciones.forEach((leccion) => {
      try {
        const guardado = localStorage.getItem(`francenol-progreso/lecciones/${leccion.slug}`);
        if (guardado) {
          const arr = JSON.parse(guardado);
          if (Array.isArray(arr) && arr.length > 0 && arr.every(Boolean)) {
            nuevasCompletadas[leccion.slug] = true;
          }
        }
      } catch (e) {
        // si algo sale mal leyendo, simplemente no se marca como completada
      }
    });
    setCompletadas(nuevasCompletadas);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Color morado de fondo (base) */}
      <div className="fixed inset-0 bg-crema -z-20" />

      {/* Imagen de las banderas, muy sutil, encima del color */}
      <div
        className="fixed inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none -z-10"
        style={{ backgroundImage: "url('/fondo-banderas.png')" }}
      />
      <header
        className="px-6 pb-5 flex items-center justify-center"
        style={{ paddingTop: "calc(1.25rem + env(safe-area-inset-top))" }}
      >
        <span className="font-display text-2xl font-semibold text-cafe flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-turquesa flex items-center justify-center text-white text-xs font-bold">
            F
          </span>
          Franceñol
        </span>
      </header>

      <section className="relative overflow-hidden px-6 pt-6 pb-14 flex flex-col items-center text-center">
        <div className="mancha w-52 h-52 bg-turquesa/20 -top-10 -left-16" />
        <div className="mancha w-40 h-40 bg-amarillo/25 top-20 -right-10" />

        {racha.dias > 0 && (
          <div className="mb-4 inline-flex items-center gap-2 bg-amarillo text-cafe font-display font-bold text-sm px-4 py-2 rounded-full shadow-md">
            🔥 {racha.dias} {racha.dias === 1 ? "día seguido" : "días seguidos"}
          </div>
        )}

        <BurbujaHolaBonjour />

        <h1 className="font-display text-3xl font-semibold text-negro mb-2 max-w-xs">
          Apprendre l&apos;espagnol simplement
        </h1>
        <p className="text-cafe-light text-base mb-8 max-w-sm">
          Aprende español paso a paso utilizando el francés como apoyo.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a href="#lecciones" className="bg-turquesa hover:bg-turquesa-dark active:scale-95 transition-all text-white font-display font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-turquesa/30">
            🚀 Commencer à apprendre
          </a>
          <Link href="/progreso" className="text-cafe font-display font-semibold text-sm underline underline-offset-4 active:scale-95 transition-all">
            📊 Voir mes progrès
          </Link>
        </div>
      </section>

      <section id="lecciones" className="px-6 pb-16 max-w-md mx-auto">
        <h2 className="font-display text-xl font-semibold text-negro mb-8">
          📚 Mes leçons
        </h2>

        {niveles.map((nivel) => {
          const leccionesDelNivel = lecciones.filter((l) => l.nivel === nivel.id);
          return (
            <div key={nivel.id} className="mb-12">
              <div className={`inline-flex items-center gap-2 ${nivel.bg} ${nivel.texto} rounded-full px-4 py-1.5 mb-8 font-display font-semibold text-sm`}>
                <span>{nivel.emoji}</span>
                <span>{nivel.nombre}</span>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-cafe/15 -z-0" />

                {leccionesDelNivel.map((leccion, i) => {
                  const offset = [0, 46, 0, -46][i % 4];
                  const completada = completadas[leccion.slug];
                  return (
                    <Link
                      key={leccion.slug}
                      href={`/lecciones/${leccion.slug}`}
                      className="relative flex flex-col items-center gap-1.5 py-3 active:scale-90 transition-transform"
                      style={{ transform: `translateX(${offset}px)` }}
                    >
                      <div className={`relative w-16 h-16 rounded-full ${nivel.bg} flex items-center justify-center text-3xl shadow-md`}>
                        {leccion.icon}
                        {completada && (
                          <span className="absolute -top-1.5 -right-1.5 bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-md">
                            ⭐
                          </span>
                        )}
                      </div>
                      <span className="font-display text-xs font-semibold text-negro text-center max-w-[90px] leading-tight">
                        {leccion.fr}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <footer className="px-6 pb-12 pt-4 text-center max-w-md mx-auto">
        <div className="border-t border-cafe/15 pt-8">
          <p className="text-cafe-light text-sm leading-relaxed mb-1">
            Cet espace est né de l&apos;envie de t&apos;accompagner à chaque nouveau mot.
          </p>
          <p className="text-cafe-light text-sm leading-relaxed mb-4">
            Fait pour toi, avec toute la patience et tout l&apos;amour du monde.
          </p>
          <p className="font-display text-2xl font-semibold text-turquesa-dark">
            🇩🇿 Con todo mi amor, mami ❤️ 🇲🇽
          </p>
        </div>
      </footer>
    </main>
  );
}