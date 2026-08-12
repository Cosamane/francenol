"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import muebles from "@/data/lecciones/muebles";

export default function LeccionMuebles() {
  return (
    <PlantillaLeccion
      emoji="🛋️"
      tituloFr="Les meubles"
      tituloEs="Muebles y decoración"
      palabras={muebles}
    />
  );
}