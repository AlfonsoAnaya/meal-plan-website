import { useState } from 'react';
// import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';

function DatabaseForm() {

  const [formData, setFormData] = useState<Recipe>({
    id: 0,
    name: '',
    tagline: '',
    ingredients: [],
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
    console.log(formData.method)
  };




  return (
    <div className="w-[70%] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2>Forma Para Base de Datos</h2>
        <form
          className="w-[100%]"
        // onSubmit={handleSubmit}
        >
          {/* Basic Information */}
          <div className="py-2 flex flex-row">
            <label className="w-[20%] block">
              ID:

            </label>
            <input type="number" name="id" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
          </div>

          <div className="py-2">
            <label>
              Name:
              <input type="text" name="name" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Tagline:
              <input type="text-area" name="tagline" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>


          {/* Ingredients */}
          {/* <div><div>
            <label>Ingredients:</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={ingredient.name}
                  placeholder="Ingredient Name"
                // onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  value={ingredient.quantity}
                  placeholder="Quantity"
                // onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                />
                <button type="button"
                // onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button"
            // onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>
          </div> */}

          <div className="py-2">
            <label className="w-[30%]">
              Primary Ingredient:
              <input type="text" name="primaryIngredient" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Secondary Ingredient (optional):
              <input type="text" name="secondaryIngredient"
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
              border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Portions:
              <input type="number" name="portions" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Difficulty:
              <input type="text" name="secondaryIngredient" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Prep Time:
              <input type="number" name="prepTime" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Total Time:
              <input type="number" name="totalTime" required
                className="ml-2 p-[2px] pl-[12px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
              />
            </label>
          </div>

          {/* ARRAYS METHODS AND TIPS */}
          <div className="py-2">
            <label className="w-[30%]">
              Method:
              <textarea
                value={formData.method.join('\n')}  // Join array of strings with newline characters
                required
                name="method"
                onChange={handleArrayChange}
              />
            </label>
          </div>

          <div className="py-2">
            <label className="w-[30%]">
              Tips (optional):
              <textarea
                value={formData.method.join('\n')}  // Join array of strings with newline characters
                name="tips"
                onChange={handleArrayChange}
              />
            </label>
          </div>


          {/* BOOLEANS */}

          <div className="py-2">
            <label className="w-[30%]">
              Vegan 🥦:
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

          <div className="py-2">
            <label className="w-[30%]">
              Dairy Free 🥛⛔:
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

          <div className="py-2">
            <label className="w-[30%]">
              Vegetarian 🌿:
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

          <div className="py-2">
            <label className="w-[30%]">
              Gluten Free:
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

          <div className="py-2">
            <label className="w-[30%]">
              Spicy:
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

          <div className="py-2">
            <label className="w-[30%]">
              Quick and Easy:
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

          <div className="py-2">
            <label className="w-[30%]">
              Budget Friendly:
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

          <div className="py-2">
            <label className="w-[30%]">
              Batch Cooking:
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

          <div className="py-2">
            <label className="w-[30%]">
              Low Carb:
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

          <div className="py-2">
            <label className="w-[30%]">
              High Protein:
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

          <div className="py-2">
            <label className="w-[30%]">
              Low Calorie:
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

          <div className="py-2">
            <label className="w-[30%]">
              Heart Healthy:
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

          <div className="py-2">
            <label className="w-[30%]">
              Main Dish:
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

          <div className="py-2">
            <label className="w-[30%]">
              Dessert:
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

          <div className="py-2">
            <label className="w-[30%]">
              Side Dish:
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



          <button type="submit">Submit</button>

        </form>


      </div>
      <div className="mt-6">
        <h3>Current Value:</h3>
        <p>
          {"{"}
          id: {formData.id},<br />
          name: '{formData.name}',<br />
          tagline: '{formData.tagline}',<br />
          primaryIngredient: '{formData.primaryIngredient}',<br />
          secondaryIngredient: '{formData.secondaryIngredient}',
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
        {"}"}
      </div>

    </div>




  )
}

export default DatabaseForm;