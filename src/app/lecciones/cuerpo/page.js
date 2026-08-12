"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import cuerpo from "@/data/lecciones/cuerpo";

export default function LeccionCuerpo() {
  return (
    <PlantillaLeccion
      emoji="🧍"
      tituloFr="Le corps"
      tituloEs="Cuerpo"
      palabras={cuerpo}
    />
  );
}