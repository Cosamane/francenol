// Funciones para manejar la racha de días seguidos practicando.
// Todo se guarda en localStorage, así que vive en el celular de quien lo usa.

function obtenerFechaHoy() {
  const d = new Date();
  const anio = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
}

// Se llama cada vez que se marca una palabra como practicada.
// Actualiza la racha: +1 si fue ayer, se reinicia a 1 si se saltó un día,
// no cambia si ya se había contado hoy.
export function actualizarRacha() {
  if (typeof window === "undefined") return null;

  try {
    const hoy = obtenerFechaHoy();
    const guardado = localStorage.getItem("francenol-racha");
    let datos = guardado ? JSON.parse(guardado) : null;

    if (!datos) {
      datos = { ultimaFecha: hoy, dias: 1 };
    } else if (datos.ultimaFecha === hoy) {
      // ya se contó el día de hoy, no hacer nada
      return datos;
    } else {
      const anterior = new Date(datos.ultimaFecha);
      const actual = new Date(hoy);
      const diffDias = Math.round((actual - anterior) / (1000 * 60 * 60 * 24));

      if (diffDias === 1) {
        datos = { ultimaFecha: hoy, dias: datos.dias + 1 };
      } else {
        datos = { ultimaFecha: hoy, dias: 1 };
      }
    }

    localStorage.setItem("francenol-racha", JSON.stringify(datos));
    return datos;
  } catch (e) {
    return null;
  }
}

// Solo lee la racha guardada, sin modificarla (para mostrarla en pantalla).
export function leerRacha() {
  if (typeof window === "undefined") return { dias: 0 };
  try {
    const guardado = localStorage.getItem("francenol-racha");
    if (!guardado) return { dias: 0 };
    return JSON.parse(guardado);
  } catch (e) {
    return { dias: 0 };
  }
}