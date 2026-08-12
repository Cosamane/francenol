"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import dichos from "@/data/lecciones/dichos";

export default function LeccionDichos() {
  return (
    <PlantillaLeccion
      emoji="🗣️"
      tituloFr="Expressions courantes"
      tituloEs="Dichos y frases coloquiales"
      palabras={dichos}
    />
  );
}