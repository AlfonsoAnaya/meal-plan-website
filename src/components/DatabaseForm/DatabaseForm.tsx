import { useState } from 'react';

function DatabaseForm() {

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    tagline: '',
    primaryIngredient: '',
    secondaryIngredient: '',
    portions: 0,
    difficulty: '',
    prepTime: 0,
    totalTime: 0,
    img: '',
    imgThumb: '',
    type: '',
    cuisine: '',
    method: [],
    tips: [],
    isVegan: false,
    isDairyFree: false,
    isVegetarian: false,
    isGlutenFree: false,
    isSpicy: false,
    isQuickAndEasy: false,
    isBudgetFriendly: false,
    isBatchCooking: false,
    isLowCarb: false,
    isHighProtein: false,
    isLowCalorie: false,
    isHeartHealthy: false,
    isMainDish: false,
    isDessert: false,
    isSideDish: false,
  });

  const [ingredients, setIngredients] = useState([
    {
      ingredientNameSingular: '',
      ingredientNamePlural: '',
      ingredientQuantity: 0,
      ingredientUnit: '',
      ingredientCategory: '',
      subsIngredientNameSingular: '',
      subsIngredientNamePlural: '',
      subsIngredientQuantity: 0,
      subsIngredientUnit: '',
      subsIngredientCategory: '',
    },
  ]);

  const addIngredient = () => {
    setIngredients((prevState) => [
      ...prevState,
      {
        ingredientNameSingular: '',
        ingredientNamePlural: '',
        ingredientQuantity: 0,
        ingredientUnit: '',
        ingredientCategory: '',
        subsIngredientNameSingular: '',
        subsIngredientNamePlural: '',
        subsIngredientQuantity: 0,
        subsIngredientUnit: '',
        subsIngredientCategory: '',
      }
    ])
  }

  const deleteIngredient = (index: number) => {
    let newState = [...ingredients];
    newState.splice(index, 1);
    setIngredients(newState);
  }



  const handleIngredientsChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIngredients((prevData) => {
      return prevData.map((ingredient, i) => {
        // Update the specified object at the given index
        if (i === index) {
          return {
            ...ingredient,
            [name]: value,
          };
        }
        return ingredient;
      });
    });
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // If the input type is radio, convert the value to a boolean
    const updatedValue = e.target.type === 'radio' ? value === 'true' : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const array = value.split('\n');

    setFormData((prevData) => ({
      ...prevData,
      [name]: array,
    }));
  };




  return (
    <div className="w-[80%] mx-auto flex gap-4 justify-center">
      <div className="flex flex-col justify-center items-center w-[55%]">
        <h2>Forma Para Base de Datos</h2>
        <form
          className="w-[100%]"
        // onSubmit={handleSubmit}
        >
          {/* Basic Information */}
          <div className="py-2 flex flex-row">
            <input type="number" name="id" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='ID'
            />
          </div>

          <div className="py-2">
            <input type="text" name="name" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Name'
            />
          </div>

          <div className="py-2">

            <input type="text-area" name="tagline" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Tagline - Short Description'
            />

          </div>



          <div className="py-2">

            <input type="text" name="primaryIngredient" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Primary Ingredient'
            />

          </div>

          <div className="py-2">

            <input type="text" name="secondaryIngredient"
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
              border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Secondary Ingredient'
            />

          </div>

          <div className="py-2">

            <input type="number" name="portions" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Portions'
            />

          </div>

          <div className="py-2">
            <input type="text" name="secondaryIngredient" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Difficulty'
            />

          </div>

          <div className="py-2">
            <input type="number" name="prepTime" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Prep Time'
            />

          </div>

          <div className="py-2">

            <input type="number" name="totalTime" required
              className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Total Time'
            />

          </div>

          {/* ARRAYS METHODS AND TIPS */}
          <div className="py-2">
            <textarea
              className="ml-2 px-[2px] py-[7px] pl-[12px] w-[70%] rounded-xl 
              border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              value={formData.method.join('\n')}  // Join array of strings with newline characters
              required
              name="method"
              onChange={handleArrayChange}
              placeholder='Method - no double spaces between paragraphs!'
            />

          </div>

          <div className="py-2">

            <textarea
              className="ml-2 px-[2px] py-[7px] pl-[12px] w-[70%] rounded-xl 
            border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              value={formData.tips.join('\n')}  // Join array of strings with newline characters
              name="tips"
              onChange={handleArrayChange}
              placeholder='Tips (Opcional) - no double spaces between paragraphs!'
            />

          </div>


          {/* BOOLEANS */}
          <div className="w-[70%] hidden" >
            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">

              <span className="w-[30%] min-w-[155px] block">Vegan 🥦:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isVegan"
                  value="true"
                  checked={formData.isVegan}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isVegan"
                  value="false"
                  checked={!formData.isVegan}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Dairy Free 🥛⛔:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isDairyFree"
                  value="true"
                  checked={formData.isDairyFree}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isDairyFree"
                  value="false"
                  checked={!formData.isDairyFree}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Vegetarian 🌿:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isVegetarian"
                  value="true"
                  checked={formData.isVegetarian}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isVegetarian"
                  value="false"
                  checked={!formData.isVegetarian}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Gluten Free:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isGlutenFree"
                  value="true"
                  checked={formData.isGlutenFree}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isGlutenFree"
                  value="false"
                  checked={!formData.isGlutenFree}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Spicy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSpicy"
                  value="true"
                  checked={formData.isSpicy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSpicy"
                  value="false"
                  checked={!formData.isSpicy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Quick and Easy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isQuickAndEasy"
                  value="true"
                  checked={formData.isQuickAndEasy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isQuickAndEasy"
                  value="false"
                  checked={!formData.isQuickAndEasy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Budget Friendly:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isBudgetFriendly"
                  value="true"
                  checked={formData.isBudgetFriendly}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isBudgetFriendly"
                  value="false"
                  checked={!formData.isBudgetFriendly}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Batch Cooking:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isBatchCooking"
                  value="true"
                  checked={formData.isBatchCooking}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isBatchCooking"
                  value="false"
                  checked={!formData.isBatchCooking}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Low Carb:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isLowCarb"
                  value="true"
                  checked={formData.isLowCarb}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isLowCarb"
                  value="false"
                  checked={!formData.isLowCarb}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">High Protein:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isHighProtein"
                  value="true"
                  checked={formData.isHighProtein}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isHighProtein"
                  value="false"
                  checked={!formData.isHighProtein}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Low Calorie:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isLowCalorie"
                  value="true"
                  checked={formData.isLowCalorie}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isLowCalorie"
                  value="false"
                  checked={!formData.isLowCalorie}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Heart Healthy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isHeartHealthy"
                  value="true"
                  checked={formData.isHeartHealthy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isHeartHealthy"
                  value="false"
                  checked={!formData.isHeartHealthy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Main Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isMainDish"
                  value="true"
                  checked={formData.isMainDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isMainDish"
                  value="false"
                  checked={!formData.isMainDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Dessert:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isDessert"
                  value="true"
                  checked={formData.isDessert}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isDessert"
                  value="false"
                  checked={!formData.isDessert}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Side Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSideDish"
                  value="true"
                  checked={formData.isSideDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSideDish"
                  value="false"
                  checked={!formData.isSideDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            Ingredients:
            {ingredients.map((element, index) => {
              return (
                <div
                  key={`ingredient ${index}`}
                  className="ingredient-container border-[1px] border-gray-600">
                  {/* ==== MAIN INGREDIENT ==== */}

                  <div className="ingredient">

                    Ingredient {index + 1}:

                    {/* NAME */}
                    <div className="py-2">
                      <input
                        type="text" name="ingredientNameSingular" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        //value={ingredient.name.singular}
                        onChange={handleIngredientsChange(index)}
                        placeholder="Name - singular"
                      />
                    </div>

                    <div className="py-2">
                      <input type="text" name="ingredientNamePlural" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Name - plural'
                      />
                    </div>

                    {/* QUANTITY */}
                    <div className="py-2 flex flex-row">
                      <input type="number" name="ingredientQuantity" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Quantity'
                      />
                    </div>

                    {/* UNIT */}
                    <div className="py-2">
                      <input type="text" name="ingredientUnit" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Unit'
                      />
                    </div>

                    {/* CATEGORY */}
                    <div className="py-2">
                      <input type="text" name="ingredientCategory" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        //onChange={handleChange}
                        onChange={handleIngredientsChange(index)}
                        placeholder='Category'
                      />
                    </div>
                  </div>

                  {/* ==== SUBSTITUTION ==== */}
                  <div className="substitution ml-10">
                    Substitution
                    {/* NAME */}
                    <div className="py-2">
                      <input type="text" name="subsIngredientNameSingular" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Name - singular'
                      />
                    </div>

                    <div className="py-2">
                      <input type="text" name="subsIngredientNamePlural" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Name - plural'
                      />
                    </div>

                    {/* QUANTITY */}
                    <div className="py-2 flex flex-row">
                      <input type="number" name="subsIngredientQuantity" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Quantity'
                      />
                    </div>

                    {/* UNIT */}
                    <div className="py-2">
                      <input type="text" name="subsIngredientUnit" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Unit'
                      />
                    </div>

                    {/* CATEGORY */}
                    <div className="py-2">
                      <input type="text" name="subsIngredientCategory" required
                        className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Category'
                      />
                    </div>
                  </div>
                  <button
                    className="color-white bg-red-400 py-[1em] px-[2.5em] rounded-full my-4"
                    onClick={() => deleteIngredient(index)}>
                    Delete Ingredient
                  </button>
                </div>

              )
            })}
            <button
              className="color-white bg-primary py-[1em] px-[2.5em] rounded-full my-4"
              onClick={addIngredient}>
              Add Ingredient
            </button>
          </div>

          <button type="submit">Submit</button>

        </form>


      </div>
      <div className="mt-6 w-[40%]">
        <h3>Current Value:</h3>
        <p>
          {"{"}
          id: {formData.id},<br />
          name: '{formData.name}',<br />
          tagline: '{formData.tagline}',<br />
          primaryIngredient: '{formData.primaryIngredient}',<br />
          secondaryIngredient: '{formData.secondaryIngredient}',<br />
          portions: {formData.portions},<br />
          difficulty: '{formData.difficulty}',<br />
          prepTime: {formData.prepTime},<br />
          totalTime: {formData.totalTime},<br />
          method: {`['${formData.method.join("','")}']`},<br />
          tips: {`['${formData.tips?.join("','")}']`},<br />
          isVegan: {formData.isVegan.toString()},<br />
          isDairyFree: {formData.isDairyFree.toString()},<br />
          isVegetarian: {formData.isVegetarian.toString()},<br />
          isGlutenFree: {formData.isGlutenFree.toString()},<br />
          isSpicy: {formData.isSpicy.toString()},<br />
          isQuickAndEasy: {formData.isQuickAndEasy.toString()},<br />
          isBudgetFriendly: {formData.isBudgetFriendly.toString()},<br />
          isBatchCooking: {formData.isBatchCooking.toString()},<br />
          isLowCarb: {formData.isLowCarb.toString()},<br />
          isHighProtein: {formData.isHighProtein.toString()},<br />
          isLowCalorie: {formData.isLowCalorie.toString()},<br />
          isHeartHealthy: {formData.isHeartHealthy.toString()},<br />
          isMainDish: {formData.isMainDish.toString()},<br />
          isDessert: {formData.isDessert.toString()},<br />
          isSideDish: {formData.isSideDish.toString()},<br />
        </p>
        {ingredients.map((element, i) => {
          return (
            <p
              key={`list-ingredient${i}`}
            >ingredients: {ingredients[i].ingredientNameSingular} {ingredients[i].subsIngredientCategory}</p>
          )
        })}
        {"}"}
      </div>

    </div>




  )
}

export default DatabaseForm;