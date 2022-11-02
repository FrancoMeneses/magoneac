// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Metodologia() {
    return (
        <div>
            <div className="bg-local bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/background-images/1300295768.png)' }}>
                <div className="flex flex-col justify-center items-center pb-32 h-[44rem] lg:h-[60rem] md:h-[60rem] text-white">
                    <img className="mt-16" src="https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/metodologias_orig.png" />
                </div>
            </div>
            <div className="flex flex-col gap-y-6 py-8">
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-evenly text-center gap-y-6">
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
                    <div>
                        <Swiper
                            autoplay={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96"
                                    src="https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/mat1_orig.png"
                                    alt="image slide 1"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96"
                                    src="https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/mat2_orig.png"
                                    alt="image slide 2"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="object-contain w-full h-96"
                                    src="https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/mat3_orig.png"
                                    alt="image slide 3"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div>Metodo</div>
                <div>stem</div>
                <div>ingles</div>
            </div>
        </div>
    )
}