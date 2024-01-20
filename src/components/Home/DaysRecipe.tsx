// shadow-[12px_18px_#4385be]

function DaysRecipe() {
  return (
    <section className="todays-recipe-section flex flex-col items-center">
      <div className="flex flex-row max-w-[1100px] mx-[2rem] my-16 gap-[1.5rem] ">
        <div className="recipe-img max-w-[60%] max-h-[650px]">
          <img className="block object-cover w-[100%] h-[100%] object-center"
            src="https://source.unsplash.com/49u4b6h2row"
            alt="a bowl of pasta with pesto on a white marble table"></img>
        </div>
        <div className="recipe-info flex flex-col justify-center items-left">
          <h2 className="text-[2.5rem] text-primary font-[600]">La receta del día</h2>
          <h3 className="recipe-title text-[1.75rem] text-secondary font-secondary font-[600]"> Pasta con Pesto </h3>
          <p className="welcome-text">
            Duis ac turpis in ex porta venenatis. Vivamus faucibus nisi in eros
            euismod fringilla. Quisque pretium sapien purus.
          </p>
          <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-4">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">20 min</span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">Fácil</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DaysRecipe;
