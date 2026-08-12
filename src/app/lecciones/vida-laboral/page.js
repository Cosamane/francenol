"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import vidaLaboral from "@/data/lecciones/vidaLaboral";

export default function LeccionVidaLaboral() {
  return (
    <PlantillaLeccion
      emoji="💻"
      tituloFr="La vie au travail"
      tituloEs="Vida laboral"
      palabras={vidaLaboral}
    />
  );
}