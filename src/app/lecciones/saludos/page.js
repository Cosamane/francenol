"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import saludos from "@/data/lecciones/saludos";

export default function LeccionSaludos() {
  return (
    <PlantillaLeccion
      emoji="👋"
      tituloFr="Salutations"
      tituloEs="Saludos"
      palabras={saludos}
    />
  );
}