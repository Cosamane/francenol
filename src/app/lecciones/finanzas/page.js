"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import finanzas from "@/data/lecciones/finanzas";

export default function LeccionFinanzas() {
  return (
    <PlantillaLeccion
      emoji="💰"
      tituloFr="Les finances personnelles"
      tituloEs="Finanzas personales"
      palabras={finanzas}
    />
  );
}