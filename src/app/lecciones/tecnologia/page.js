"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import tecnologia from "@/data/lecciones/tecnologia";

export default function LeccionTecnologia() {
  return (
    <PlantillaLeccion
      emoji="📱"
      tituloFr="La technologie"
      tituloEs="Tecnología"
      palabras={tecnologia}
    />
  );
}