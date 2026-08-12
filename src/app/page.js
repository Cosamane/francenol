import Link from "next/link";
import BurbujaHolaBonjour from "@/components/BurbujaHolaBonjour";

const niveles = [
  { id: "principiante", nombre: "Principiante", emoji: "🌱", bg: "bg-turquesa", texto: "text-white" },
  { id: "intermedio", nombre: "Intermedio", emoji: "🌿", bg: "bg-amarillo", texto: "text-cafe" },
  { id: "avanzado", nombre: "Avanzado", emoji: "🌳", bg: "bg-cafe", texto: "text-white" },
  { id: "experto", nombre: "Experto", emoji: "🏆", bg: "bg-negro", texto: "text-white" },
];

const lecciones = [
  { icon: "👋", fr: "Salutations", es: "Saludos", slug: "saludos", nivel: "principiante" },
  { icon: "🙋", fr: "Se présenter", es: "Presentarse", slug: "presentarse", nivel: "principiante" },
  { icon: "🔢", fr: "Les nombres", es: "Números", slug: "numeros", nivel: "principiante" },
  { icon: "☀️", fr: "La météo", es: "El clima", slug: "clima", nivel: "principiante" },
  { icon: "🎨", fr: "Les couleurs", es: "Colores", slug: "colores", nivel: "principiante" },
  { icon: "🐾", fr: "Les animaux", es: "Animales", slug: "animales", nivel: "principiante" },
  { icon: "👨‍👩‍👧", fr: "La famille", es: "Familia", slug: "familia", nivel: "intermedio" },
  { icon: "🍲", fr: "La nourriture", es: "Comida", slug: "comida", nivel: "intermedio" },
  { icon: "🏠", fr: "La maison", es: "Casa", slug: "casa", nivel: "intermedio" },
  { icon: "🛍️", fr: "Les achats", es: "Compras", slug: "compras", nivel: "avanzado" },
  { icon: "🚌", fr: "Les transports", es: "Transporte", slug: "transporte", nivel: "avanzado" },
  { icon: "💼", fr: "Le travail", es: "Trabajo", slug: "trabajo", nivel: "avanzado" },
  { icon: "💬", fr: "Conversations de base", es: "Conversaciones básicas", slug: "conversaciones", nivel: "experto" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-crema">
      <header
        className="px-6 pb-5 flex items-center justify-center"
        style={{ paddingTop: "calc(1.25rem + env(safe-area-inset-top))" }}
      >
        <span className="font-display text-2xl font-semibold text-cafe flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-turquesa flex items-center justify-center text-white text-xs font-bold">
            F
          </span>
          Franceñol
        </span>
      </header>

      <section className="relative overflow-hidden px-6 pt-6 pb-14 flex flex-col items-center text-center">
        <div className="mancha w-52 h-52 bg-turquesa/20 -top-10 -left-16" />
        <div className="mancha w-40 h-40 bg-amarillo/25 top-20 -right-10" />

        <BurbujaHolaBonjour />

        <h1 className="font-display text-3xl font-semibold text-negro mb-2 max-w-xs">
          Apprendre l&apos;espagnol simplement
        </h1>
        <p className="text-cafe-light text-base mb-8 max-w-sm">
          Aprende español paso a paso utilizando el francés como apoyo.
        </p>

        <a href="#lecciones" className="bg-turquesa hover:bg-turquesa-dark active:scale-95 transition-all text-white font-display font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-turquesa/30">
          🚀 Commencer à apprendre
        </a>
      </section>

      <section id="lecciones" className="px-6 pb-16 max-w-md mx-auto">
        <h2 className="font-display text-xl font-semibold text-negro mb-8">
          📚 Mes leçons
        </h2>

        {niveles.map((nivel) => {
          const leccionesDelNivel = lecciones.filter((l) => l.nivel === nivel.id);
          return (
            <div key={nivel.id} className="mb-12">
              <div className={`inline-flex items-center gap-2 ${nivel.bg} ${nivel.texto} rounded-full px-4 py-1.5 mb-8 font-display font-semibold text-sm`}>
                <span>{nivel.emoji}</span>
                <span>{nivel.nombre}</span>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-cafe/15 -z-0" />

                {leccionesDelNivel.map((leccion, i) => {
                  const offset = [0, 46, 0, -46][i % 4];
                  return (
                    <Link
                      key={leccion.slug}
                      href={`/lecciones/${leccion.slug}`}
                      className="relative flex flex-col items-center gap-1.5 py-3 active:scale-90 transition-transform"
                      style={{ transform: `translateX(${offset}px)` }}
                    >
                      <div className={`w-16 h-16 rounded-full ${nivel.bg} flex items-center justify-center text-3xl shadow-md`}>
                        {leccion.icon}
                      </div>
                      <span className="font-display text-xs font-semibold text-negro text-center max-w-[90px] leading-tight">
                        {leccion.fr}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}