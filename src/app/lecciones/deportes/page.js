"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import deportes from "@/data/lecciones/deportes";

export default function LeccionDeportes() {
  return (
    <PlantillaLeccion
      emoji="⚽"
      tituloFr="Les sports"
      tituloEs="Deportes"
      palabras={deportes}
    />
  );
}