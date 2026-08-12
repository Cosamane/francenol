"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import objetos from "@/data/lecciones/objetos";

export default function LeccionObjetos() {
  return (
    <PlantillaLeccion
      emoji="🪑"
      tituloFr="Objets du quotidien"
      tituloEs="Objetos cotidianos"
      palabras={objetos}
    />
  );
}