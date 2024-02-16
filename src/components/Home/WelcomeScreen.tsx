function WelcomeScreen() {
    return (
        <section className="todays-recipe-section flex flex-col justify-center items-center bg-white">
            
                <div className="h-[500px] flex flex-row justify-center items-strech w-[95%] max-w-[1200px] mt-12 mb-12 ">
                    <div className="w-[60%] flex flex-wrap gap-4 justify-center items-center">
                        <img className="block object-cover w-[100%] h-[100%] object-center rounded-[10px]" 
                        src="./img/recipes/00004.jpg" 
                        alt="un plato con dos tacos de carne, guacamole y pico de gallo"/>
                    </div>
                    <div className="w-[40%] pl-16 flex flex-col justify-center items-left gap-6">
                        <h2 className="text-[2.5rem] text-primary font-[600]">
                            Deja de pensar en qué vas a comer hoy
                        </h2>
                        <h3 className="recipe-title text-[1.75rem] text-dark font-secondary font-[600]">
                            Nuestros planes de comida semanales solucionan este problema por ti
                        </h3>
                        <p className="welcome-text text-dark text-[1.25rem]">
                            Cada semana 7 recetas nuevas
                        </p>
                    </div>
                </div>
            
        </section>
    );
}

export default WelcomeScreen;
