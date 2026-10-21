import { useState } from 'react'
import { pesos } from '../utils/formato.js'

function DetalleProducto({ producto, onCerrar, onAgregar }) {
  // Color elegido por el cliente
  const [color, setColor] = useState('')

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
      onClick={onCerrar}
    >
      <div
        className="grid w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl
          md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center bg-stone-100 p-4">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="aspect-square w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-titulo text-2xl font-bold text-mar-900">
              {producto.nombre}
            </h3>

            <button
              onClick={onCerrar}
              aria-label="Cerrar"
              className="text-3xl leading-none text-stone-400 hover:text-stone-700"
            >
              ×
            </button>
          </div>

          <p className="text-2xl font-bold text-marca-600">
            {pesos(producto.precio)}
          </p>

          <p className="text-stone-600">
            {producto.descripcion || 'Descubre este modelo Lamborghini.'}
          </p>

          <div>
            <p className="mb-2 text-sm font-semibold">Color</p>

            <div className="flex flex-wrap gap-2">
              {producto.colores.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize ${
                    color === c
                      ? 'border-black bg-black text-white'
                      : 'border-stone-300 bg-white text-black hover:border-gray-500'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!color}
            onClick={() => onAgregar(producto, color)}
            className="mt-auto rounded-full bg-black py-3 font-semibold text-white
              transition hover:bg-white hover:text-black hover:ring-1 hover:ring-gray-400
              disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500"
          >
            {color ? 'Agregar al carrito' : 'Elige un color'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto