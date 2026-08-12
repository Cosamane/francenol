"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import citaMedica from "@/data/lecciones/citaMedica";

export default function LeccionCitaMedica() {
  return (
    <PlantillaLeccion
      emoji="🩺"
      tituloFr="Le rendez-vous médical"
      tituloEs="Cita médica formal"
      palabras={citaMedica}
    />
  );
}