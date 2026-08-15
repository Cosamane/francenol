"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import salud from "@/data/lecciones/salud";

export default function LeccionSalud() {
  return (
    <PlantillaLeccion
      emoji="🏥"
      tituloFr="La santé"
      tituloEs="Salud"
      palabras={salud}
    />
  );
}