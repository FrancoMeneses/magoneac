export default function Inicio() {
    return (
        <div>
            <div className="bg-local bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./src/images/bg-1-inicio.jpeg)' }}>
                <div className="flex flex-col justify-end items-center pb-32 h-[44rem] text-white gap-8">
                    <div className=" font-sans font-extrabold text-center text-3xl md:text-5xl lg:text-7xl whitespace-normal">JUGANDO APRENDO</div>
                    <button className="rounded-full py-3 px-12 text-2xl md:text-3xl lg:text-4xl bg-[#f5c22a] font-bold">
                        <a href="http://www.facebook.com" target='_blank'>INSCRIBETE AQUI</a>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-6 bg-[#017ddf] items-center">
                <div>
                    <img src="/src/images/30_orig.png" />
                </div>
                <div className="text-center mt-2 text-white">
                    <p className="text-2xl md:text-4xl lg:text-5xl mb-3">¡GRACIAS!</p>
                    <p className="text-sm mb-3 md:text-2xl lg:text-4xl">A lo largo de estos 30 años hemos entregado nuestro corazón a mas de 13mil pequeños y pequeñas de nivel preescolar y primaria</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-6">
                <div>
                    <img src="/src/images/ofer2_orig.png" />
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
                        <img src="/src/images/7754_orig.png" />
                    </div>
                    <div>
                        <iframe className="w-[21rem] h-[16rem] lg:w-[32rem] lg:h-[18rem] md:w-[32rem] md:h-[18rem] " src="/src/videos/video_g.mp4" frameBorder='0' allow="accelerometer; clipboard-write; encrypted-media; gyroscope" sandbox="" allowFullScreen></iframe>
                    </div>
                    <div className="text-center text-sky-600 mt-6 p-x-6">
                        <p className="whitespace-normal md:text-2xl lg:text-4xl">
                            Los niños aprenderán durante todo el día,
                            incluyendo tiempo de juego, porque la oportunidad de aprender está siempre presente.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-local bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./src/images/preescolar.png)' }}>
                <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white gap-8">
                    <img className="mt-16" src="/src/images/pres1_orig.png" />
                </div>
            </div>
            <div className="bg-local bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./src/images/16.png)' }}>
                <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white gap-8">
                    <img className="mt-16" src="/src/images/17.png" />
                </div>
            </div>
            <div className="bg-local bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./src/images/18.png)' }}>
            <div className="flex flex-col justify-start items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white gap-8">
                    <img className="mt-16" src="/src/images/19.png" />
                </div>
            </div>
            <div className="flex flex-col gap-8 p-6 items-center">
                <div>
                    <img src="/src/images/20.png"/>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row mlg:flex-wrap content-center justify-center">
                    <img src="/src/images/21.png"/>
                    <img src="/src/images/22.png"/>
                    <img src="/src/images/23.png"/>
                    <img src="/src/images/24.png"/>
                </div>
                <div>
                <iframe className="w-[21rem] h-[16rem] lg:w-[32rem] lg:h-[18rem] md:w-[32rem] md:h-[18rem] " src="/src/videos/mama_282.mp4" frameBorder='0' allow="accelerometer; clipboard-write; encrypted-media; gyroscope" sandbox="" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}