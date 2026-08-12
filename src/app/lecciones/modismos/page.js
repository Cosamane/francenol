"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import modismos from "@/data/lecciones/modismos";

export default function LeccionModismos() {
  return (
    <PlantillaLeccion
      emoji="💭"
      tituloFr="Expressions idiomatiques"
      tituloEs="Modismos mexicanos"
      palabras={modismos}
    />
  );
}