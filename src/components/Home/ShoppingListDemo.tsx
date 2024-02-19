function ShoppingListDemo() {
    return (
        <div className="todays-recipe-section flex flex-col justify-center items-center bg-gray-200 md:bg-white">
            <div className="md:h-[500px] flex flex-col md:flex-row justify-start md:justify-center items-center md:items-stretch w-[100%] md:w-[95%] max-w-[1200px] md:mt-12 mb-20">
                <div className="w-[100%] md:w-[40%] h-[400px] md:h-auto flex flex-wrap gap-4 justify-center items-center">
                    <video autoPlay muted loop width="320" className="rounded-[10px] border-[1px] border-gray-200">
                        <source src="/img/videos/shopping-list-demo.webm" type="video/webm" />

                    </video>
                </div>
                <div className="w-[90%] md:w-[50%] mt-4 md:mt-0 md:pl-16 flex flex-col justify-center items-left gap-2 md:gap-6">
                    <h2 className="text-[1.5rem] md:text-[2.25rem] text-primary font-[600]">
                        Crea listas de compras interactives en unos cuantos clicks
                    </h2>
                    <h3 className="recipe-title text-[1rem] md:text-[1.5rem] text-dark font-secondary font-[600]">
                        Selecciona tus recetas y ordenamos los ingredientes automáticamente
                    </h3>
                    <p className="welcome-text text-dark text-[.9rem] md:text-[1.15rem]">
                        Hazte usuario para guardar tus listas de compras
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListDemo