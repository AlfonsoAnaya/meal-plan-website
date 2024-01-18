import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipe";

function App() {
  return (
    <div className="font-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeName" element={<IndividualRecipe />} />
      </Routes>
    </div>
  );
}
export default App;
