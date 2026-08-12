"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import dias from "@/data/lecciones/dias";

export default function LeccionDias() {
  return (
    <PlantillaLeccion
      emoji="📅"
      tituloFr="Les jours"
      tituloEs="Días y fechas"
      palabras={dias}
    />
  );
}