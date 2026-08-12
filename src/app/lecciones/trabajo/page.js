"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import trabajo from "@/data/lecciones/trabajo";

export default function LeccionTrabajo() {
  return <PlantillaLeccion emoji="💼" tituloFr="Le travail" tituloEs="Trabajo" palabras={trabajo} />;
}