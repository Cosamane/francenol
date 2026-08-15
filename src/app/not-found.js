import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6">
      <div className="fixed inset-0 bg-crema -z-20" />
      <div
        className="fixed inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none -z-10"
        style={{ backgroundImage: "url('/fondo-banderas.png')" }}
      />

      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4">🧭</div>
        <h1 className="font-display text-3xl font-semibold text-negro mb-2">
          Page introuvable
        </h1>
        <p className="text-cafe-light mb-8">
          Cette page n&apos;existe pas, ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-turquesa hover:bg-turquesa-dark active:scale-95 transition-all text-white font-display font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-turquesa/30"
        >
          🏠 Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}