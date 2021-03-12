import logo from "./logo.svg";
import "./App.css";
import ProductDataRenderer from "../src/refactor-me/ProductDataRenderer";
import { USD, NZD, Euro } from "./constants/CurrencyTypes";

function App() {
  return (
    <div className="App">
      <header>Product List</header>
      <ProductDataRenderer currency={NZD}></ProductDataRenderer>
      <ProductDataRenderer currency={USD}></ProductDataRenderer>
      <ProductDataRenderer currency={Euro}></ProductDataRenderer>
    </div>
  );
}

export default App;
