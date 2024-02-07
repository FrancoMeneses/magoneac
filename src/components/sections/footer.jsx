import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <footer className='font-body'>
            <div className="md:bg-fixed md:bg-top bg-no-repeat bg-center bg-cover flex justify-center items-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115493/Portfolio/magoneEscuela/footer-bg.png)' }}>
                <div className='gap-[20px] md:gap-[50px] lg:gap-[80px] flex flex-col text-white font-light text-xs items-center content-center py-4 lg:flex-row lg:justify-center lg:px-4 md:px-4 md:justify-between md:flex-row md:text-md lg:text-xl'>
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                            <img className='w-[350px]' src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115505/Portfolio/magoneEscuela/pie1_orig.png' />
                        <div className='text-center text-base'>
                            <p>Calle Cam. Nacional 40, Independencia,</p>
                            <p>72150 Puebla, Pue., Mexico</p>
                        </div>
                            <img className='w-[350px]' src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115505/Portfolio/magoneEscuela/pie8_orig.png' />
                    </div>
                    <div className="flex flex-col gap-y-6 py-6 w-[190px] text-base">
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/historia'>Historia</NavLink>
                        </div>
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/metodologias'>Metodologías</NavLink>
                        </div>
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/actividades'>Calendario</NavLink>
                        </div>
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </div>
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/aviso-de-privacidad'>Aviso de Privacidad</NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 text-base">
                        <div className="text-center text-lg md:text-lg lg:text-xl font-semibold">Tel 2-85-07-10</div>
                        <div className="text-center text-lg font-semibold md:text-lg lg:text-xl">WhatsApp 222 549 9669</div>
                        <div className="text-center mb-3">informes@carruselmagonepuebla.com</div>
                        <div className="flex flex-row justify-center space-x-20 max-md:space-x-10">
                            <div className='w-8'>
                                <a href='http://www.facebook.com' target='_blank'>
                                    <div className='hover:scale-125 duration-300'>
                                        <FontAwesomeIcon icon={faFacebook} className='fa-3x' />
                                    </div>
                                </a>
                            </div>
                            <div className='w-8'>
                                <a href='http://www.instagram.com' target='_blank'>
                                    <div className='hover:scale-125 duration-300'>
                                        <FontAwesomeIcon icon={faInstagram} className='fa-3x' />
                                    </div>
                                </a>
                            </div>
                            <div className='w-8'>
                                <a href='http://www.youtube.com' target='_blank'>
                                    <div className='hover:scale-125 duration-300'>
                                        <FontAwesomeIcon icon={faYoutube} className='fa-3x' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}