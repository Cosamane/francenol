"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import profesiones from "@/data/lecciones/profesiones";

export default function LeccionProfesiones() {
  return (
    <PlantillaLeccion
      emoji="👩‍⚕️"
      tituloFr="Les métiers"
      tituloEs="Profesiones"
      palabras={profesiones}
    />
  );
}