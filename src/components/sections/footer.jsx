import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(./src/images/footer-bg.png)' }}>
                <div className='flex flex-col text-white font-light font-sans text-xs items-center gap-y-8 gap-x-8 py-8 lg:mr-16 lg:justify-between lg:flex-row lg:justify-center md:text-xl lg:text-xl'>
                    <div className="flex flex-col gap-y-2 items-center">
                        <div>
                            <img src='/src/images/pie1_orig.png' />
                        </div>
                        <div className='text-center'>
                            <p>Calle Cam. Nacional 40, Independencia, 72150</p>
                            <p>72150 Puebla, Pue., Mexico</p>
                        </div>
                        <div>
                            <img src='src/images/pie8_orig.png' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="text-center">
                            <NavLink to='/historia'>Historia</NavLink>
                        </div>
                        <div className="text-center">
                            <NavLink to='/metodologias'>Metodologias</NavLink>
                        </div>
                        <div className="text-center">
                            <NavLink to='/actividades'>Calendario</NavLink>
                        </div>
                        <div className="text-center">
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </div>
                        <div className="text-center">
                            <NavLink to='/aviso-de-privacidad'>Aviso de Privacidad</NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-center text-lg md:text-3xl lg:text-3xl font-semibold">Tel 2-85-07-10</div>
                        <div className="text-center text-lg font-semibold md:text-3xl lg:text-3xl">WhatsApp 222 549 9669</div>
                        <div className="text-center">informes@carruselmagonepuebla.com</div>
                        <div className="flex flex-row justify-center">
                            <div className='w-8'>
                                <a href='http://www.facebook.com' target='_blank'>
                                    <img src='/src/images/svg/facebook.svg' className='hover:scale-125 duration-300' />
                                </a>
                            </div>
                            <div className='w-8'>
                                <a href='http://www.instagram.com' target='_blank'>
                                    <img src='/src/images/svg/instagram.svg' className='hover:scale-125 duration-300' />
                                </a>
                            </div>
                            <div className='w-8'>
                                <a href='http://www.youtube.com' target='_blank'>
                                    <img src='/src/images/svg/youtube.svg' className='hover:scale-125 duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}