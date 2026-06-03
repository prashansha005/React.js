import react from 'react'
import ProductCard from './ProductCard.jsx';

const Body = () => {
  return (
    <main className="product-cards">
      <ProductCard title="Shoe" description="Comfy shoes for your journey" price="$102" />

      <ProductCard title="Shirt" description="Comfy shirts for your journey" price="$112" />

      <ProductCard title="Pant" description="Comfy pant for your journey" price="$92" />
    </main>
  );
};

export default Body;