import { NavLink } from "react-router-dom"

export function NotFound() {
  return(
    <main className="flex flex-col items-center w-full h-full my-12 px-4">
      <p className="text-2xl md:text-4xl lg:text-5xl text-center text-[#f5c22a] font-bold drop-shadow-sm">No fue posible encontrar esta página</p>
      <img className="lg:w-[900px] drop-shadow-md" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675121332/Portfolio/magoneEscuela/404_Error-pana_lwnrqz.svg" />
      <NavLink to="/" className='text-center py-3 border rounded-lg w-32 bg-[#f5c22a] text-white font-bold shadow-md'>Regresar</NavLink>
    </main>
  )
}