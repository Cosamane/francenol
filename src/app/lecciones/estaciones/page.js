"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import estaciones from "@/data/lecciones/estaciones";

export default function LeccionEstaciones() {
  return (
    <PlantillaLeccion
      emoji="🍂"
      tituloFr="Les saisons"
      tituloEs="Estaciones del año"
      palabras={estaciones}
    />
  );
}