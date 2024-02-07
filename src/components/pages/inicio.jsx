export function Inicio() {
    return (
        <main className="font-body">
            <section className="bg-local bg-center bg-no-repeat bg-cover md:bg-top lg:bg-top" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112400/Portfolio/magoneEscuela/bg-1-inicio.jpg)' }}>
                <div className="flex flex-col justify-end items-center pb-32 h-[44rem] text-white gap-8">
                    <div className=" font-extrabold text-center text-3xl md:text-5xl lg:text-7xl whitespace-normal drop-shadow-md backdrop-blur-sm rounded-full px-4 py-1 lg:px-8 lg:py-3">JUGANDO APRENDO</div>
                    <button className="rounded-full py-3 px-12 text-2xl md:text-3xl lg:text-4xl bg-[#f5c22a] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md">
                        <a href="http://www.facebook.com" target='_blank'>INSCRÍBETE AQUI</a>
                    </button>
                </div>
            </section>
            <section className="flex flex-col gap-2 p-6 bg-[#017ddf] items-center">
                <div>
                    <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112451/Portfolio/magoneEscuela/30_orig.png" alt="Educando para el futuro" />
                </div>
                <div className="text-center mt-2 text-white">
                    <p className="text-2xl md:text-4xl lg:text-5xl mb-3">¡GRACIAS!</p>
                    <p className="text-sm mb-3 md:text-2xl lg:text-4xl">A lo largo de estos 30 años hemos entregado nuestro corazón a mas de 13mil pequeños y pequeñas de nivel preescolar y primaria</p>
                </div>
            </section>
            <section className="flex flex-col items-center p-6">
                <div>
                    <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112464/Portfolio/magoneEscuela/ofer2_orig.png" alt="oferta educativa" />
                </div>
                <div className="text-center text-sky-600">
                    <p className="whitespace-normal md:text-2xl lg:text-4xl">Creemos que jugar y aprender van de la mano.</p>
                    <p className="whitespace-normal md:text-2xl lg:text-4xl">Es por eso que nos preocupamos por ofrecerle
                        a tu pequeño un ambiente amigable
                        y de mucho aprendizaje.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="my-6">
                        <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112469/Portfolio/magoneEscuela/7754_orig.png" alt="Alumnos en presentacion" />
                    </div>
                    {/* <div>
                        <video className="w-[21rem] h-[16rem] md:w-[32rem] md:h-[18rem] lg:w-[45rem] lg:h-[26rem]" controls src="https://www.carruselmagonepuebla.com/uploads/b/141058682-778875656490070819/video_general_informes_v1_975.mp4" type="video/mp4"></video>
                    </div> */}
                    <div className="text-center text-sky-600 mt-6 p-x-6">
                        <p className="whitespace-normal md:text-2xl lg:text-4xl">
                            Los niños aprenderán durante todo el día,
                            incluyendo tiempo de juego, porque la oportunidad de aprender está siempre presente.
                        </p>
                    </div>
                </div>
            </section>
            <section className="md:bg-fixed bg-top bg-no-repeat bg-cover md:bg-[center_top_-10rem] lg:bg-[center_top_-15rem]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112556/Portfolio/magoneEscuela/preescolar.png)' }}>
                <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white">
                    <img className="mt-16" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112649/Portfolio/magoneEscuela/pres1_orig.png" alt="Preescolar" />
                </div>
            </section>
            <section className="md:bg-fixed bg-top bg-no-repeat bg-cover md:bg-[center_top_-5rem] lg:bg-[center_top_-15rem]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112560/Portfolio/magoneEscuela/16.png)' }}>
                <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white">
                    <img className="mt-16" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112633/Portfolio/magoneEscuela/17.png" alt="Primaria" />
                </div>
            </section>
            <section className="md:bg-fixed bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112566/Portfolio/magoneEscuela/18.png)' }}>
                <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white">
                    <img className="mt-16" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112660/Portfolio/magoneEscuela/19.png" alt="Amamos lo que hacemos y tenemos 4 razones" />
                </div>
            </section>
            <section className="flex flex-col gap-8 p-6 items-center">
                <div>
                    <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112801/Portfolio/magoneEscuela/20.png" alt="Metodologias 2022" />
                </div>
                <div className="flex flex-col w-full md:flex-row md:flex-wrap lg:flex-row mlg:flex-wrap items-center justify-center">
                    <img className="w-[300px] md:w-[400px] lg:md:w-[500px]" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112807/Portfolio/magoneEscuela/21.png" alt="Matematicas constructivas" />
                    <img className="w-[300px] md:w-[400px] lg:md:w-[500px]" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112814/Portfolio/magoneEscuela/22.png" alt="Metodologia STEM" />
                    <img className="w-[300px] md:w-[400px] lg:md:w-[500px]" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112815/Portfolio/magoneEscuela/23.png" alt="Metodo Filadelfia" />
                    <img className="w-[300px] md:w-[400px] lg:md:w-[500px]" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112815/Portfolio/magoneEscuela/24.png" alt="Ingles interactivo" />
                </div>
                {/* <div>
                    <video className="w-[21rem] h-[16rem] md:w-[32rem] md:h-[18rem] lg:w-[45rem] lg:h-[26rem]" controls src="https://www.carruselmagonepuebla.com/uploads/b/141058682-778875656490070819/mama_282.mp4" type="video/mp4"></video>
                </div> */}
            </section>
        </main>
    )
}