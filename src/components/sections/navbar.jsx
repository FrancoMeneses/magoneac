import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between py-2.5 px-4 h-18 border bg-white font-light font-sans">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className='w-full relative flex flex-wrap justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                    <NavLink to='/inicio'>
                        <img className='w-40 h-12 max-w-xs max-h-10' src="https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/logo-pagina.jpg" alt='logo-pagina' />
                    </NavLink>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent w-12 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-7 h-7">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>


                    </button>
                </div>
                <div className={
                    "lg:flex  flex-grow items-center bg-white" +
                    (navbarOpen ? " flex rounded shadow-lg shadow-slate-300" : " hidden")
                }
                >
                    <ul className='flex flex-col lg:flex-row lg:gap-1 list-none lg:ml-auto'>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/inicio' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Inicio</NavLink></li>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/historia' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Historia</NavLink></li>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/metodologias' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Metodologias</NavLink></li>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/actividades' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Actividades</NavLink></li>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/contacto' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Contacto</NavLink></li>
                        <li className='px-3 py-2 transition duration-300 hover:text-amber-300 leading-snug'><NavLink to='/aviso-de-privacidad' className={({ isActive }) =>
                            isActive ? "text-amber-300" : "undefined"
                        }>Aviso de Privacidad</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}