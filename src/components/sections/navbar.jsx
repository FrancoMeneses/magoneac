import { useState } from 'react'
import { NavLink, ScrollRestoration } from 'react-router-dom'

export function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <>
            <nav className="w-full sticky z-10 top-0 h-[80px] bg-white flex justify-center items-center">
                <div className="container flex  items-center justify-center w-full">
                    <div className='w-full relative flex justify-between px-4 items-center lg:justify-center'>
                        <NavLink to='/'>
                            <img className='w-40 h-12 max-w-xs max-h-10' src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112338/Portfolio/magoneEscuela/logo-pagina.jpg" alt='logo-pagina' />
                        </NavLink>
                        <button
                            className="text-white cursor-pointer z-10 lg:z-0 text-xl leading-none px-3 py-1 border border-solid border-transparent w-12 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-7 h-7">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className={
                        "w-full absolute lg:static lg:mt-0 lg:opacity-100 lg:flex lg:flex-row transition-all duration-300 ease-in-out" +
                        (navbarOpen ? " mt-[330px] h-auto" : " opacity-0")
                    }>
                        <ul className='flex flex-col bg-white left-0 w-full text-center lg:static rounded-b-md lg:flex-row lg:gap-6 list-none lg:ml-auto lg:justify-center lg:items-center font-body'>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Inicio</NavLink></li>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/historia' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Historia</NavLink></li>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/metodologias' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Metodologías</NavLink></li>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/actividades' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Actividades</NavLink></li>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/contacto' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Contacto</NavLink></li>
                            <li className='my-3 lg:my-0 transition duration-300 hover:text-amber-300 leading-snug'><NavLink end to='/aviso-de-privacidad' className={({ isActive }) =>
                                isActive ? "text-amber-300" : "undefined"
                            }
                                onClick={() => setNavbarOpen(false)}>Aviso de Privacidad</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ScrollRestoration />
        </>
    )
}