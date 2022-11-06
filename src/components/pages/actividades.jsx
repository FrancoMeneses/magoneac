export default function Actividades(){
    return(
        <div className="flex flex-col">
            <div className="bg-local bg-top bg-no-repeat bg-cover object-scale-down h-60 md:h-[36rem] lg:h-[36rem] flex flex-col justify-center scale-100" style={{ backgroundImage: 'url(https://www.carruselmagonepuebla.com/uploads/1/4/1/0/141058682/background-images/1009917045.jpg)' }}>
                    <div>
                        <p className="text-white font-sans font-extrabold text-center text-3xl md:text-5xl lg:text-7xl whitespace-normal">ACTIVIDADES</p>
                    </div>
            </div>
            <div className="h-80 md:mx-20 lg:mx-20 md:h-96 lg:h-96 flex flex-col justify-center">
                <div className="h-[12rem] px-6 py-4 m-4 bg-[#7e3794] flex flex-col gap-12">
                    <div className="">
                    <p className="text-[#f0e7f2] font-bold">Próximas actividades</p>
                    </div>
                    <div className="">
                    <p className="text-[#f0e7f2]">No hay próximos eventos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}