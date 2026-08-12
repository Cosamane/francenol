"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import restaurante from "@/data/lecciones/restaurante";

export default function LeccionRestaurante() {
  return (
    <PlantillaLeccion
      emoji="🍽️"
      tituloFr="Au restaurant"
      tituloEs="En el restaurante"
      palabras={restaurante}
    />
  );
}