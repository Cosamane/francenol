"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import humor from "@/data/lecciones/humor";

export default function LeccionHumor() {
  return (
    <PlantillaLeccion
      emoji="😄"
      tituloFr="L'humour mexicain"
      tituloEs="Bromas y humor mexicano"
      palabras={humor}
    />
  );
}