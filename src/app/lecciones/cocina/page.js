"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import cocina from "@/data/lecciones/cocina";

export default function LeccionCocina() {
  return (
    <PlantillaLeccion
      emoji="🍳"
      tituloFr="La cuisine"
      tituloEs="Cocina y recetas"
      palabras={cocina}
    />
  );
}