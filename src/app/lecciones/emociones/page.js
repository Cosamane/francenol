"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import emociones from "@/data/lecciones/emociones";

export default function LeccionEmociones() {
  return (
    <PlantillaLeccion
      emoji="😊"
      tituloFr="Les émotions"
      tituloEs="Emociones"
      palabras={emociones}
    />
  );
}