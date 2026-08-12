"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import presentarse from "@/data/lecciones/presentarse";

export default function LeccionPresentarse() {
  return (
    <PlantillaLeccion
      emoji="🙋"
      tituloFr="Se présenter"
      tituloEs="Presentarse"
      palabras={presentarse}
    />
  );
}