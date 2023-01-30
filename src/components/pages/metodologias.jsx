import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Metodologia() {
    return (
        <div>
            <div className="bg-local bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1675112991/Portfolio/magoneEscuela/met-1.png)' }}>
                <div className="flex flex-col justify-center items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white">
                    <img className="mt-16" src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113027/Portfolio/magoneEscuela/met-2.png" />
                </div>
            </div>
            <div className="flex flex-col gap-y-14 py-8">
                <div className="flex flex-col justify-evenly md:flex-row md:content-center md:justify-center md:items-center md:self-center lg:flex-row lg:content-center lg:justify-center lg:items-center lg:self-center">
                    <div className="flex flex-col justify-evenly text-center gap-y-6 md:w-2/3 lg:w-2/3">
                        <div>
                            <p className="font-bold text-3xl text-[#017ddf]">MATEMÁTICAS</p>
                            <p className="text-[#f5c22a] font-bold text-3xl">CONSTRUCTIVAS</p>
                        </div>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            Aprender vocabulario algebraico preparandolos para la secundaria
                            con ayuda de la manipulación interactiva de regletas aprenderán
                            elevaciones a la segunda potencia, suma de fracciones con diferente
                            denominador y mucho más.
                        </p>
                    </div>
                    <div className="p-4 md:flex md:w-60 md:p-0 md:mr-8 md:self-center lg:w-80 lg:p-0 lg:mr-8 lg:self-center">
                        <Swiper
                            autoplay={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113075/Portfolio/magoneEscuela/met-s1-1.png"
                                    alt="image slide 1"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113075/Portfolio/magoneEscuela/met-s1-2.png"
                                    alt="image slide 2"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113075/Portfolio/magoneEscuela/met-s1-3.png"
                                    alt="image slide 3"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly md:flex-row md:content-center md:justify-center md:items-center md:self-center lg:flex-row lg:content-center lg:justify-center lg:items-center lg:self-center">
                    <div className="flex flex-col justify-evenly text-center gap-y-6 md:w-2/3 lg:w-2/3">
                        <div>
                            <p className="font-bold text-3xl text-[#017ddf]">MÉTODO</p>
                            <p className="text-[#f5c22a] font-bold text-3xl">FILADELFIA</p>
                        </div>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            Tradicionalmente, hacemos esperar a los niños seis largos años
                            para que accedan por sí mismos a la lectura, porque pensamos que
                            antes de esta edad no son lo suficientemente maduros o capaces para leer.
                        </p>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            Sin embargo, si un niño a los dos años de edad ha aprendido a enteder
                            y hablar su idioma materno y con el Método Filadelfia es posible que
                            el niño comprenda y se exprese con un vocabulario acorde con sus propias
                            experiencias y que pueda reconocer numerosas palabras escritas en menor
                            tiempo y a un ritmo natural y sin estrés.
                        </p>
                    </div>
                    <div className="p-4 md:flex md:w-60 md:p-0 md:mr-8 md:self-center lg:w-80 lg:p-0 lg:mr-8 lg:self-center">
                        <Swiper
                            autoplay={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113133/Portfolio/magoneEscuela/met-s2-1.png"
                                    alt="image slide 1"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113133/Portfolio/magoneEscuela/met-s2-2.png"
                                    alt="image slide 2"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113133/Portfolio/magoneEscuela/met-s2-3.png"
                                    alt="image slide 3"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly md:flex-row md:content-center md:justify-center md:items-center md:self-center lg:flex-row lg:content-center lg:justify-center lg:items-center lg:self-center">
                    <div className="flex flex-col justify-evenly text-center gap-y-6 md:w-2/3 lg:w-2/3">
                        <div>
                            <p className="font-bold text-3xl text-[#017ddf]">METODOLOGÍA</p>
                            <p className="text-[#f5c22a] font-bold text-3xl">STEM</p>
                        </div>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            El término STEM (por sus siglas en inglés) Science, Technology, Engineering and
                            Mathematics que incluyen áreas de investigación y exploración el cual motiva
                            al estudiante a querer saber más, a llegar a sus propias conclusiones y a diseñar
                            sus propias investigaciones para aplicar lo que descubrieron desarrollando un pensamiento
                            en resolución de cualquier problema.
                        </p>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            A medida que la tecnología avanza, la educación STEM se hace cada vez mas esencial
                            que al incluirla en las clases proporciona oportunidades para preparar a las nuevas
                            generaciones a enfrentar los retos que traerá la Cuarta Revolución Industrial.
                        </p>
                    </div>
                    <div className="p-4 md:flex md:w-60 md:p-0 md:mr-8 md:self-center lg:w-80 lg:p-0 lg:mr-8 lg:self-center">
                        <Swiper
                            autoplay={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113171/Portfolio/magoneEscuela/met-s3-1.png"
                                    alt="image slide 1"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113171/Portfolio/magoneEscuela/met-s3-2.png"
                                    alt="image slide 2"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113171/Portfolio/magoneEscuela/met-s3-3.png"
                                    alt="image slide 3"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly md:flex-row md:content-center md:justify-center md:items-center md:self-center lg:flex-row lg:content-center lg:justify-center lg:items-center lg:self-center">
                    <div className="flex flex-col justify-evenly text-center gap-y-6 md:w-2/3 lg:w-2/3">
                        <div>
                            <p className="font-bold text-3xl text-[#017ddf]">INGLÉS</p>
                            <p className="text-[#f5c22a] font-bold text-3xl">INTERACTIVO</p>
                        </div>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            Fomentamos en los alumnos una actitud positiva hacia el idioma y su 
                            adquisición de manera natural.
                        </p>
                        <p className="text-[#017ddf] text-sm px-12 lg:px-40 md:px-40 md:text-xl lg:text-2xl">
                            El programa es fascinante para nuestros pequeños alumnos que aprenden
                            haciendo actividades muy bien planeadas para desarrollar las habilidades
                            de una manera motivante y divertida.
                        </p>
                    </div>
                    <div className="p-4 md:flex md:w-60 md:p-0 md:mr-8 md:self-center lg:w-80 lg:p-0 lg:mr-8 lg:self-center">
                        <Swiper
                            autoplay={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113211/Portfolio/magoneEscuela/met-s4-1.png"
                                    alt="image slide 1"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96 md:h-80"
                                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1675113211/Portfolio/magoneEscuela/met-s4-2.png"
                                    alt="image slide 2"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}