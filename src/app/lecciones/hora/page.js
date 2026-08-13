"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import hora from "@/data/lecciones/hora";

export default function LeccionHora() {
  return (
    <PlantillaLeccion
      emoji="🕐"
      tituloFr="L'heure"
      tituloEs="La hora"
      palabras={hora}
    />
  );
}