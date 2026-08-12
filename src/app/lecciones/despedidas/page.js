"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import despedidas from "@/data/lecciones/despedidas";

export default function LeccionDespedidas() {
  return (
    <PlantillaLeccion
      emoji="👋"
      tituloFr="Adieux et remerciements"
      tituloEs="Despedidas y agradecimientos"
      palabras={despedidas}
    />
  );
}