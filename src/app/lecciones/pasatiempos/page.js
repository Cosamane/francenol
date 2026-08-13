"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import pasatiempos from "@/data/lecciones/pasatiempos";

export default function LeccionPasatiempos() {
  return (
    <PlantillaLeccion
      emoji="🎨"
      tituloFr="Les passe-temps"
      tituloEs="Pasatiempos"
      palabras={pasatiempos}
    />
  );
}