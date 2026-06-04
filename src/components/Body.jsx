
import ProductCard from './ProductCard.jsx';
import '../styles/Body.css';
import { products } from "../constants/constant.js"

const Body = () => {
  return (
    <main className="product-cards">
      {products.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </main>
  );
};

export default Body;