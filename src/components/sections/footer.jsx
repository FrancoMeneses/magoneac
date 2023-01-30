import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <footer>
            <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115493/Portfolio/magoneEscuela/footer-bg.png)' }}>
                <div className='flex max-sm:flex-col text-white font-light font-sans text-xs items-center content-center py-4 lg:flex-row lg:justify-center lg:px-4 md:px-4 md:justify-between md:flex-row md:text-md lg:text-xl'>
                    <div className="flex flex-col gap-y-2 items-center lg:basis-4/12 md:basis-4/12">
                        <div>
                            <img src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115505/Portfolio/magoneEscuela/pie1_orig.png' />
                        </div>
                        <div className='text-center'>
                            <p>Calle Cam. Nacional 40, Independencia,</p>
                            <p>72150 Puebla, Pue., Mexico</p>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1675115505/Portfolio/magoneEscuela/pie8_orig.png' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pb-6 basis-4/12 md:basis-4/12">
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/historia'>Historia</NavLink>
                        </div>
                        <div className="hover:scale-125 duration-300 hover:font-semibold text-center">
                            <NavLink to='/metodologias'>Metodologias</NavLink>
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
                    <div className="flex flex-col gap-y-2 basis-4/12 md:basis-4/12">
                        <div className="text-center text-lg md:text-xl lg:text-3xl font-semibold">Tel 2-85-07-10</div>
                        <div className="text-center text-lg font-semibold md:text-xl lg:text-3xl">WhatsApp 222 549 9669</div>
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