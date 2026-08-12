"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import supermercado from "@/data/lecciones/supermercado";

export default function LeccionSupermercado() {
  return (
    <PlantillaLeccion
      emoji="🛒"
      tituloFr="Le supermarché"
      tituloEs="El supermercado"
      palabras={supermercado}
    />
  );
}