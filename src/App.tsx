import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipePage";
import WeeklyPlan from "./components/WeeklyPlan/WeeklyPlan";
import DatabaseForm from "./components/DatabaseForm/DatabaseForm";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  return (
    <div className="font-primary w-[100%]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-semanal"  element={<WeeklyPlan />}/>
        <Route path="/shopping-list"  element={<ShoppingList />}/>
        <Route path="/recipe/:recipeName" element={<IndividualRecipe />} />
        <Route path="/database-form"  element={<DatabaseForm />}/>
      </Routes>
    </div>
  );
}
export default App;
