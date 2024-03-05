import { Routes, Route } from "react-router-dom";
import ScrollToTopOnMount from "./utils/scrollToTop";
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipePage";
import WeeklyPlan from "./components/WeeklyPlan/WeeklyPlan";
import DatabaseForm from "./components/DatabaseForm/DatabaseForm";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-primary w-[100%]">
      <Header />
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-semanal"  element={<WeeklyPlan />}/>
        <Route path="/shopping-list"  element={<ShoppingList />}/>
        <Route path="/recipe/:recipeName" element={<IndividualRecipe />} />
        <Route path="/database-form"  element={<DatabaseForm />}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
