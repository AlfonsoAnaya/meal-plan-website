import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DaysRecipe from './components/DaysRecipe';
import RecipeCollection from './components/RecipeCollection';

function App() {
  return (
    <Router>
      <div className="font-primary">
        <Header />
        <DaysRecipe />
        <RecipeCollection />
      </div>
    </Router>

  );
}
export default App;
