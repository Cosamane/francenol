export default function FondoApp() {
  return (
    <>
      <div className="fixed inset-0 bg-crema -z-20" />
      <div
        className="fixed inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none -z-10"
        style={{ backgroundImage: "url('/fondo-banderas.png')" }}
      />
    </>
  );
}