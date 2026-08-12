"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import transporte from "@/data/lecciones/transporte";

export default function LeccionTransporte() {
  return <PlantillaLeccion emoji="🚌" tituloFr="Les transports" tituloEs="Transporte" palabras={transporte} />;
}