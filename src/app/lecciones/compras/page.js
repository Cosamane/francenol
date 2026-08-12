"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import compras from "@/data/lecciones/compras";

export default function LeccionCompras() {
  return <PlantillaLeccion emoji="🛍️" tituloFr="Les achats" tituloEs="Compras" palabras={compras} />;
}