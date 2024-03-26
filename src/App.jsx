import {} from "react";
import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import PriceOption from "./componets/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      <h2 className="text-3xl">Create Account</h2>
      <PriceOption />
    </>
  );
}

export default App;
