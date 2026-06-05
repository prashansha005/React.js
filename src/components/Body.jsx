
import ProductCard from './ProductCard.jsx';
import '../styles/Body.css';
import { products } from "../constants/constant.js";
import { useState} from 'react';

const Body = () => {
  const [productList,setProductList] = useState(products);
  const[element, setElement] = useState(4);

  function handleTopRatedProducts(){
    const topRatedProducts = products.filter((product) => product.rating.rate > 4);
    setProductList(topRatedProducts);
  }

  function handleAdd() {
    setElement(element + 1);
  }

  return (
    <main className="product-cards">
      <div>
        <button onClick={handleTopRatedProducts}>Top Rated Products</button>
        <button onClick={handleAdd}>Add</button>
        <h2>{element}</h2>
      </div>
      {productList.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </main>
  );
};

export default Body;