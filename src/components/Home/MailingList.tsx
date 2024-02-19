function MailingList() {
    return (
        <div className="w-[100%] todays-recipe-section flex flex-row justify-center items-center bg-gray-200 md:bg-white">
            <div className="md:h-[500px] flex flex-col md:flex-row justify-start md:justify-center items-center md:items-stretch w-[100%] md:w-[95%] max-w-[1200px] md:mt-[50px] mb-[70px]">
    
                <div className="w-[90%] md:w-[40%] mt-4 md:mt-0 text-center flex flex-col justify-center items-center gap-2 md:gap-6">
                    <h2 className="text-[1.5rem]  md:text-[2.25rem] text-primary font-[600]">
                        No te pierdas ninguno de nuestros planes
                    </h2>
                    <h3 className="recipe-title text-[1rem] md:text-[1.5rem] text-dark font-secondary font-[600]">
                        Déjanos tu correo y recibe el plan y la lista de compras directo en tu correo
                    </h3>
                    <div>
                        <input
                            type="email"
                            placeholder="tucorreo@..."
                            className="ml-2 p-[6px] pl-[12px] w-[300px] rounded-full 
                            border-[1px] border-gray-500 focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        />
                    </div>
                    <p className="welcome-text text-dark text-[.9rem] md:text-[1.15rem]">
                        Cada semana 7 recetas nuevas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MailingList