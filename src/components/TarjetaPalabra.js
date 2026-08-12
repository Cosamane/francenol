"use client";

import { useRef } from "react";

export default function TarjetaPalabra({
  es,
  fonetica,
  fr,
  frase,
  fraseFr,
  practicada,
  onToggle,
}) {
  const utteranceRef = useRef(null);

  const hablar = (texto) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const synth = window.speechSynthesis;

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "es-MX";
    utterance.rate = 0.85;
    utteranceRef.current = utterance;

    // Truco conocido para el bug de Chrome que se come el inicio
    // de la frase: pausar justo antes y reanudar justo después de
    // encolar el audio "resetea" el motor sin perder el comienzo.
    synth.pause();
    synth.speak(utterance);
    synth.resume();
  };

  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm transition-all ${
        practicada
          ? "bg-turquesa/5 border-turquesa/40"
          : "bg-white border-cafe/10"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-2xl font-semibold text-negro">
          {es}
        </h3>
        {practicada && <span className="text-turquesa text-xl">✓</span>}
      </div>

      <button
        onClick={() => hablar(es)}
        className="w-full bg-turquesa hover:bg-turquesa-dark active:scale-95 transition-all text-white font-semibold rounded-xl py-3 mb-3"
      >
        🔊 Escuchar pronunciación
      </button>

      <p className="text-sm text-cafe-light mb-1">
        <span className="font-semibold text-cafe">Fonética:</span> {fonetica}
      </p>
      <p className="text-sm text-cafe-light mb-3">
        <span className="font-semibold text-cafe">Français :</span> {fr}
      </p>

      {frase && (
        <div className="bg-crema rounded-xl p-3 mb-3">
          <p className="text-sm text-negro italic mb-1">&quot;{frase}&quot;</p>
          <p className="text-xs text-cafe-light mb-2">{fraseFr}</p>
          <button
            onClick={() => hablar(frase)}
            className="text-xs text-turquesa-dark font-semibold"
          >
            🔊 Escuchar la frase
          </button>
        </div>
      )}

      <button
        onClick={onToggle}
        className={`w-full text-sm font-semibold rounded-xl py-2 border transition-all ${
          practicada
            ? "bg-turquesa/10 border-turquesa text-turquesa-dark"
            : "bg-white border-cafe/20 text-cafe-light"
        }`}
      >
        {practicada ? "✓ Practicada" : "Marcar como practicada"}
      </button>
    </div>
  );
}