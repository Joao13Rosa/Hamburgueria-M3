import "./style.css";

function Product({ elem, handleClick, id }) {
  return (
    <li className="li-geral">
      <img className="img-li-geral" src={elem.img} alt="" />
      <h2>{elem.name}</h2>
      <p className="p-categoria-li-geral">{elem.category}</p>
      <p className="p-preco-li-geral">R$ {elem.price.toFixed(2)}</p>
      <button
        className="button-li-geral"
        value={id}
        onClick={() => handleClick(elem)}
      >
        Adicionar
      </button>
    </li>
  );
}

export default Product;
