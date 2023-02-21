import React, { useState } from "react";

const Header = ({ allProducts, setAllProducts, total,setTotal,countProducts,setCountProducts}) => {


  const [active, setActive] = useState(false);

  const activarCart = () => {
    setActive(!active);
    console.log(active);
  };

  const onDelete = (product) => {
    const result = allProducts.filter(item => item.id !== product.id)

    setTotal(total - product.price * product.quantity)
    setCountProducts(countProducts - product.quantity)
    setAllProducts(result)
  }

  const onCleanCart = () => {
    setAllProducts([])
    setTotal(0)
    setCountProducts(0)
  }

  return (
    <header className="contenedor">
      <h1>Tiendas</h1>

      <div className="container-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="icon-cart"
          viewBox="0 0 16 16"
          onClick={activarCart}
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>

        <div className="count-products">
          <span id="contador-productos">{countProducts}</span>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <div>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>

                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>

                      <span className="precio-producto-carrito">
                        ${product.price * product.quantity}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="icon-close"
                      viewBox="0 0 16 16"
                      onClick={() => onDelete(product)}
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="container-total">
                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>
                <button className="btn-clear-all" onClick={onCleanCart}>Vaciar carrito!</button>
              </div>
            </div>
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
