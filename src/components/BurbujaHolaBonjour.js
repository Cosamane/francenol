"use client";

import { useState, useEffect } from "react";

const textos = [
  { texto: "¡Hola!", color: "text-turquesa-dark" },
  { texto: "Bonjour !", color: "text-cafe" },
];

export default function BurbujaHolaBonjour() {
  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndice((prev) => (prev + 1) % textos.length);
        setVisible(true);
      }, 250);
    }, 2200);
    return () => clearInterval(intervalo);
  }, []);

  const actual = textos[indice];

  return (
    <div className="relative w-40 h-40 mb-8 animate-float">
      <div className="absolute inset-0 rounded-full bg-turquesa/10 flex items-center justify-center">
        <span
          className={`font-display text-3xl font-semibold ${actual.color} transition-all duration-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {actual.texto}
        </span>
      </div>
    </div>
  );
}