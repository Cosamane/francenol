"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import tramites from "@/data/lecciones/tramites";

export default function LeccionTramites() {
  return (
    <PlantillaLeccion
      emoji="📋"
      tituloFr="Les démarches administratives"
      tituloEs="Trámites y burocracia"
      palabras={tramites}
    />
  );
}