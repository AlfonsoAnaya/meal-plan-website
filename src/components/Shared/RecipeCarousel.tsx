import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import recipes from "../recipes";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function RecipeCarousel() {

  const [visibleSlides, setVisibleSlides] = useState(4); // Default to 3 visible slides

  useEffect(() => {
    const handleResize = () => {
      // Update the number of visible slides based on the screen width
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        setVisibleSlides(1); // Set to 1 slide for mobile
      } else {
        setVisibleSlides(4); // Set to 3 slides for desktop
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once initially to set the correct number of visible slides
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className="relative bg-white md:bg-gray-100">
      <h3 className=" flex justify-center text-[2rem] text-dark font-[600] pt-10">El plan de esta semana</h3>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={300}
        totalSlides={recipes.length}
        visibleSlides={visibleSlides}>
        <Slider className="w-[100%] h-[500px]">
          {recipes.map((recipe, i) => {
            return (
              <Slide index={i} key={recipe.name + i}>
                <Link
                  to={`/recipe/${recipe.name}`}
                  state={{ recipeData: recipe }}>
                  <RecipeCard
                    recipe={recipe}
                  />
                </Link>
              </Slide>
            )
          })}
        </Slider>

        <ButtonBack className="hidden md:flex absolute justify-center items-center left-[10px] top-[50%] border-[1px] border-gray-400 w-[50px] h-[50px] rounded-full">
          <svg width="26" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-gray-400" d="M15.4894 2.56853L13.2179 0.29703L0.51288 13.002L13.2179 25.707L15.4894 23.4355L5.05588 13.002L15.4894 2.56853H15.4894Z" />
          </svg>
        </ButtonBack>
        <ButtonNext className="hidden md:flex absolute justify-center items-center top-[50%] right-[10px] border-[1px] border-gray-400 w-[50px] h-[50px] rounded-full">
          <svg width="26" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-gray-400" d="M0.510651 23.4315L2.78215 25.703L15.4872 12.998L2.78215 0.292969L0.510651 2.56447L10.9442 12.998L0.510651 23.4315H0.510651Z" fill="black" />
          </svg>
        </ButtonNext>
      </CarouselProvider>

    </div>
  );
}

export default RecipeCarousel;