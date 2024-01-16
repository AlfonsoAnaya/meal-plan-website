import './App.css';
import Header from './components/Header';
import DaysRecipe from './components/DaysRecipe';
import RecipeCollection from './components/RecipeCollection';

function App() {
  return (
    <div className="font-primary">
      <Header />
      <DaysRecipe />
      <RecipeCollection />
    </div>

  );
}
export default App;
