import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(value) {
    setFilteredProducts(value);
  }

  function clickInput() {
    const filteredCart = products.filter(
      (elem) =>
        elem.category === filteredProducts || elem.name === filteredProducts
    );
    setProducts(filteredCart);
  }

  function handleDeleteAll(item) {
    const filteredCart = currentSale.filter((elem) => elem.id === "");
    setCurrentSale(filteredCart);
  }

  function handleDeleteCart(item) {
    const filteredCart = currentSale.filter((elem) => elem.id !== item);
    setCurrentSale(filteredCart);
  }

  function handleClick(productId) {
    const verificacao = currentSale.find((elem) => elem.id === productId.id);
    if (!verificacao) {
      setCurrentSale([productId, ...currentSale]);
    }
  }

  return (
    <div className="App">
      <header>
        <p className="p-header">
          Burguer<span>Kenzie</span>
        </p>
        <div className="div-header-input">
          <input
            onChange={(event) => showProducts(event.target.value)}
            type="text"
            placeholder="Digitar pesquisa"
          />
          <button className="button-header" onClick={() => clickInput()}>
            Pesquisar
          </button>
        </div>
      </header>
      <div className="container">
        <ProductsList products={products} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          handleDeleteCart={handleDeleteCart}
          handleDeleteAll={handleDeleteAll}
        />
      </div>
    </div>
  );
}

export default App;
