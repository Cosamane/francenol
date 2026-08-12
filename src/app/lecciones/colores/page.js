"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import colores from "@/data/lecciones/colores";

export default function LeccionColores() {
  return (
    <PlantillaLeccion
      emoji="🎨"
      tituloFr="Les couleurs"
      tituloEs="Colores"
      palabras={colores}
    />
  );
}