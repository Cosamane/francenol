"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import familia from "@/data/lecciones/familia";

export default function LeccionFamilia() {
  return (
    <PlantillaLeccion
      emoji="👨‍👩‍👧"
      tituloFr="La famille"
      tituloEs="Familia"
      palabras={familia}
    />
  );
}