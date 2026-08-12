"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import ropa from "@/data/lecciones/ropa";

export default function LeccionRopa() {
  return (
    <PlantillaLeccion
      emoji="👕"
      tituloFr="Les vêtements"
      tituloEs="Ropa"
      palabras={ropa}
    />
  );
}