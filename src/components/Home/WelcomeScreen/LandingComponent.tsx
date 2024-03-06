function LandingComponent() {
    return (
        <div className="todays-recipe-section flex flex-col justify-center items-center bg-grayLight md:bg-white">
            <div className="flex flex-col h-[78vh] md:h-[500px] md:flex-row justify-start md:justify-center items-center md:items-stretch w-[100%] md:w-[95%] max-w-[1200px] md:mt-[50px]">
                <div className="w-[100%] md:w-[60%] h-[70%] md:h-auto flex flex-wrap gap-4 justify-center items-center">
                    <img className="block object-cover w-[100%] h-[100%] object-center md:rounded-[10px]"
                        src="./img/recipes/00004.jpg"
                        alt="un plato con dos tacos de carne, guacamole y pico de gallo" />
                </div>
                <div className="w-[90%] md:w-[40%] h-[30%] md:h-auto mt-2 md:mt-0 md:pl-16 flex flex-col justify-center items-left gap-2 md:gap-6">
                    <h2 className="text-[1.25rem] md:text-[2.25rem] text-primary font-[600]">
                        Deja de pensar en qué vas a comer hoy
                    </h2>
                    <h3 className="recipe-title text-[1rem] md:text-[1.5rem] text-dark font-secondary font-[600]">
                        Nuestros planes de comida semanales solucionan este problema por ti
                    </h3>
                    <p className="welcome-text text-dark text-[.9rem] md:text-[1.15rem]">
                        Cada semana 7 recetas nuevas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent