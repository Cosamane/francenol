"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import numeros from "@/data/lecciones/numeros";

export default function LeccionNumeros() {
  return (
    <PlantillaLeccion
      emoji="🔢"
      tituloFr="Les nombres"
      tituloEs="Números"
      palabras={numeros}
    />
  );
}