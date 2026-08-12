"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import comida from "@/data/lecciones/comida";

export default function LeccionComida() {
  return <PlantillaLeccion emoji="🍲" tituloFr="La nourriture" tituloEs="Comida" palabras={comida} />;
}