"use client";
import PlantillaLeccion from "@/components/PlantillaLeccion";
import conversaciones from "@/data/lecciones/conversaciones";

export default function LeccionConversaciones() {
  return <PlantillaLeccion emoji="💬" tituloFr="Conversations de base" tituloEs="Conversaciones básicas" palabras={conversaciones} />;
}