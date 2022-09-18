import "./style.css";

function Cart({ currentSale, handleDeleteCart, handleDeleteAll }) {
  return currentSale.length > 0 ? (
    <div className="div-geral-carrinho-produtos">
      <p className="p-titulo-carrinho">Carrinho de compras</p>
      <ul className="ul-carrinho">
        {currentSale.map((item) => (
          <li className="li-carrinho" key={item.id}>
            <div className="div-img-carrinho">
              <img className="img-carrinho" src={item.img} alt="" />
            </div>
            <div className="teste">
              <div className="div-texto-carrinho">
                <p className="p-name-carrinho">{item.name}</p>
                <p className="p-categoria-carrinho">{item.category}</p>
              </div>
              <div className="div-button-carrinho">
                <button
                  className="button-carrinho"
                  onClick={() => handleDeleteCart(item.id)}
                >
                  remover
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="div-geral-total">
        <div className="div-total-info">
          <p className="p-total-text">Total:</p>
          <p className="p-reduce">
            R$
            {currentSale
              .reduce((valorAnterior, valorAtual) => {
                return valorAnterior + valorAtual.price;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="div-button-carrinho-todos">
          <button
            className="button-remover-todos"
            onClick={() => handleDeleteAll(currentSale.id)}
          >
            Remover todos
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="div-geral-carrinho-sem-produtos">
      <p className="p-titulo-carrinho">Carrinho de compras</p>
      <div className="div-conteudo">
        <p className="p-carrinho-um">Sua sacola está vazia</p>
        <p className="p-carrinho-dois">Adicione itens</p>
      </div>
    </div>
  );
}

export default Cart;
