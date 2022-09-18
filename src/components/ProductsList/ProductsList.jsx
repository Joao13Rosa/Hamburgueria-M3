import Product from "../Product/Product";
import "./style.css";

function ProductsList({ products, handleClick }) {
  return (
    <div className="div-produtos-geral">
      <ul className="ul-geral">
        {products.map((elem) => (
          <Product key={elem.id} elem={elem} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
