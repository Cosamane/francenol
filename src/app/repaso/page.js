"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TarjetaPalabra from "@/components/TarjetaPalabra";

import saludos from "@/data/lecciones/saludos";
import presentarse from "@/data/lecciones/presentarse";
import numeros from "@/data/lecciones/numeros";
import clima from "@/data/lecciones/clima";
import colores from "@/data/lecciones/colores";
import animales from "@/data/lecciones/animales";
import hora from "@/data/lecciones/hora";
import objetos from "@/data/lecciones/objetos";
import profesiones from "@/data/lecciones/profesiones";
import deportes from "@/data/lecciones/deportes";
import familia from "@/data/lecciones/familia";
import comida from "@/data/lecciones/comida";
import casa from "@/data/lecciones/casa";
import dias from "@/data/lecciones/dias";
import cuerpo from "@/data/lecciones/cuerpo";
import ropa from "@/data/lecciones/ropa";
import supermercado from "@/data/lecciones/supermercado";
import escuela from "@/data/lecciones/escuela";
import estaciones from "@/data/lecciones/estaciones";
import muebles from "@/data/lecciones/muebles";
import compras from "@/data/lecciones/compras";
import transporte from "@/data/lecciones/transporte";
import trabajo from "@/data/lecciones/trabajo";
import emociones from "@/data/lecciones/emociones";
import salud from "@/data/lecciones/salud";
import viajes from "@/data/lecciones/viajes";
import finanzas from "@/data/lecciones/finanzas";
import tecnologia from "@/data/lecciones/tecnologia";
import pasatiempos from "@/data/lecciones/pasatiempos";
import cocina from "@/data/lecciones/cocina";
import conversaciones from "@/data/lecciones/conversaciones";
import dichos from "@/data/lecciones/dichos";
import restaurante from "@/data/lecciones/restaurante";
import vidaLaboral from "@/data/lecciones/vidaLaboral";
import modismos from "@/data/lecciones/modismos";
import citaMedica from "@/data/lecciones/citaMedica";
import tramites from "@/data/lecciones/tramites";
import humor from "@/data/lecciones/humor";
import invitaciones from "@/data/lecciones/invitaciones";
import despedidas from "@/data/lecciones/despedidas";

const datosPorLeccion = {
  saludos, presentarse, numeros, clima, colores, animales, hora, objetos, profesiones, deportes,
  familia, comida, casa, dias, cuerpo, ropa, supermercado, escuela, estaciones, muebles,
  compras, transporte, trabajo, emociones, salud, viajes, finanzas, tecnologia, pasatiempos, cocina,
  conversaciones, dichos, restaurante, "vida-laboral": vidaLaboral, modismos, "cita-medica": citaMedica,
  tramites, humor, invitaciones, despedidas,
};

function mezclar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function RepasoPage() {
  const [palabras, setPalabras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [practicadasSesion, setPracticadasSesion] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const todasLasPalabras = [];

    Object.keys(datosPorLeccion).forEach((slug) => {
      try {
        const guardado = localStorage.getItem(`francenol-progreso/lecciones/${slug}`);
        if (guardado) {
          const arr = JSON.parse(guardado);
          if (Array.isArray(arr) && arr.length > 0 && arr.every(Boolean)) {
            datosPorLeccion[slug].forEach((palabra, i) => {
              todasLasPalabras.push({ ...palabra, id: `${slug}-${i}` });
            });
          }
        }
      } catch (e) {
        // si algo sale mal leyendo, simplemente se ignora esa lección
      }
    });

    setPalabras(mezclar(todasLasPalabras));
    setCargando(false);
  }, []);

  const siguientePalabra = () => {
    setIndice((prev) => {
      const siguiente = prev + 1;
      if (siguiente >= palabras.length) {
        setPalabras((actuales) => mezclar(actuales));
        return 0;
      }
      return siguiente;
    });
  };

  const marcarPracticada = (id) => {
    setPracticadasSesion((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="min-h-screen relative">
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

        <h1 className="font-display text-3xl font-semibold text-negro mb-1">Repaso mezclado</h1>

        {cargando ? (
          <p className="text-cafe font-semibold">Cargando...</p>
        ) : palabras.length === 0 ? (
          <div className="bg-white/90 rounded-2xl p-5 shadow-md mt-6 text-center">
            <p className="text-cafe font-semibold mb-2">
              Aún no hay palabras para repasar 🌱
            </p>
            <p className="text-cafe-light text-sm mb-4">
              Completa al menos una lección al 100% para desbloquear el repaso mezclado.
            </p>
            <Link
              href="/#lecciones"
              className="inline-block bg-turquesa hover:bg-turquesa-dark active:scale-95 transition-all text-white font-display font-semibold px-6 py-3 rounded-xl"
            >
              Ir a las lecciones
            </Link>
          </div>
        ) : (
          <>
            <p className="text-cafe-light mb-6">
              Palabra {indice + 1} de {palabras.length} · mezcladas de tus lecciones completadas
            </p>

            <TarjetaPalabra
              es={palabras[indice].es}
              fonetica={palabras[indice].fonetica}
              fr={palabras[indice].fr}
              frase={palabras[indice].frase}
              fraseFr={palabras[indice].fraseFr}
              practicada={!!practicadasSesion[palabras[indice].id]}
              onToggle={() => marcarPracticada(palabras[indice].id)}
            />

            <button
              onClick={siguientePalabra}
              className="w-full mt-4 bg-amarillo hover:brightness-95 active:scale-95 transition-all text-cafe font-display font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg"
            >
              🔀 Siguiente palabra
            </button>
          </>
        )}
      </div>
    </main>
  );
}