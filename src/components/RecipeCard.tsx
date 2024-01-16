function RecipeCard() {
    return (
        <div
            className="recipe-card w-[220px] h-[300px] bg-beige rounded-xl 
            flex flex-col">

            <div className="recipe-img w-[100%] h-[60%]">
                <img className="block object-cover w-[100%] h-[100%] object-center rounded-t-xl"
                    src="https://source.unsplash.com/49u4b6h2row"
                    alt="a bowl of pasta with pesto on a white marble table"></img>
            </div>
            <div className="recipe-info flex flex-col justify-center items-left p-2">
                <h4 className="recipe-title text-[.95rem] text-secondary font-secondary font-[500]">
                    Pasta con Pesto
                </h4>
                <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-4">
                    <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">20 min</span>
                    <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">Fácil</span>
                </div>
            </div>

        </div>
    );
}

export default RecipeCard;