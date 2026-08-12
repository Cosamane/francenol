"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import escuela from "@/data/lecciones/escuela";

export default function LeccionEscuela() {
  return (
    <PlantillaLeccion
      emoji="🎒"
      tituloFr="L'école"
      tituloEs="Escuela y estudios"
      palabras={escuela}
    />
  );
}