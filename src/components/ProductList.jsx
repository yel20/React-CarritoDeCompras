import { data } from "./data";

const ProductList = ({ 
    allProducts, 
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal 

}) => {


  const onAddProducts = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, 
                                     quantity: item.quantity + 1
                                     
                                    } : item);
       
  

        setTotal(total + product.price * product.quantity)

      setCountProducts(countProducts + product.quantity)
      return setAllProducts([...products])
    }

    setTotal(total + product.price * product.quantity)
    setCountProducts(countProducts + product.quantity)
    setAllProducts([...allProducts, product]);
   

};

  console.log(allProducts);

  return (
    <div className="contenedor container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">$ {product.price}</p>
            <button className="btn-cart" onClick={() => onAddProducts(product)}>
              Add cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
