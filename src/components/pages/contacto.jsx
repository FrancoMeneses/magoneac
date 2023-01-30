export function Contacto(){
    return(
        <div>
            <div>
                <div className="flex flex-col text-center my-24">
                    <p className="font-bold text-4xl md:text-6xl lg:text-7xl text-[#077ddf]">CONTACTO</p>
                    <p className="font-bold text-4xl md:text-6xl lg:text-7xl text-[#077ddf]">MAGONE</p>
                </div>
                <div className="flex flex-col px-10 mb-12 gap-6 md:flex-row md:justify-between lg:flex-row lg:justify-between">
                    <div className="text-center">
                        <p className="flex flex-col font-bold text-lg mb-2 lg:text-2xl">Horario</p>
                        <p className="md:text-lg lg:text-lg">L - V / 8:00 - 15:00</p>
                        <p className="md:text-lg lg:text-lg">Sábado / 10:00 - 13:00</p>
                    </div>
                    <div className="text-center">
                        <p className="flex flex-col font-bold text-lg mb-2">Dirección</p>
                        <p className="md: text-lg lg:text-lg">C. Cam. Nacional 40, Independencia, 72150 Puebla</p>
                    </div>
                    <div className="text-center">
                        <p className="flex flex-col font-bold text-lg mb-2">Contacto</p>
                        <p className="md: text-lg lg:text-lg">WhatsApp: 2225499669</p>
                        <p className="md: text-lg lg:text-lg">Email: cmagone@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-8 lg:my-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.6573769465846!2d-98.25133704221155!3d19.073051081220274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6ecde3a15f9%3A0x2307a407dad6c04!2sColegio%20Magone!5e0!3m2!1ses-419!2smx!4v1667708796118!5m2!1ses-419!2smx" className="w-[25rem] h-[20rem] px-3 mb-4 md:w-[50rem] md:h-[25rem] md:px-8 lg:w-[80rem] lg:h-[40rem] lg:px-8" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}