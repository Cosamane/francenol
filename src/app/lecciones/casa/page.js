"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import casa from "@/data/lecciones/casa";

export default function LeccionCasa() {
  return <PlantillaLeccion emoji="🏠" tituloFr="La maison" tituloEs="Casa" palabras={casa} />;
}