"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import viajes from "@/data/lecciones/viajes";

export default function LeccionViajes() {
  return (
    <PlantillaLeccion
      emoji="✈️"
      tituloFr="Les voyages"
      tituloEs="Viajes"
      palabras={viajes}
    />
  );
}