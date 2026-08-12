"use client";

import PlantillaLeccion from "@/components/PlantillaLeccion";
import invitaciones from "@/data/lecciones/invitaciones";

export default function LeccionInvitaciones() {
  return (
    <PlantillaLeccion
      emoji="🎉"
      tituloFr="Les invitations"
      tituloEs="Invitaciones sociales"
      palabras={invitaciones}
    />
  );
}