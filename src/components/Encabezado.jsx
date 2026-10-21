function Encabezado({ cantidad, onAbrirCarrito }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="font-titulo text-2xl font-bold text-mar-900">
          Lambor<span className="text-marca-500">ghini</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <a href="#catalogo" className="hover:text-marca-600">
            Modelos
          </a>
          <a href="#contacto" className="hover:text-marca-600">
            Contacto
          </a>
        </nav>
        <button
          onClick={onAbrirCarrito}
          className="relative rounded-full border border-black bg-black px-5 py-2 text-sm font-semibold text-white
            transition hover:bg-white hover:text-black hover:border-black"
        >
          Carrito
          {cantidad > 0 && (
            <span
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                rounded-full bg-marca-500 text-xs"
            >
              {cantidad}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Encabezado
