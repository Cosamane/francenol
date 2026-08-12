"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import clima from "@/data/lecciones/clima";

export default function LeccionClima() {
  return (
    <PlantillaLeccion
      emoji="☀️"
      tituloFr="La météo"
      tituloEs="El clima"
      palabras={clima}
    />
  );
}