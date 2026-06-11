import {useEffect, useState} from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/Body.css';
// import { products } from "../constants/constant.js";
// import { useState} from 'react';
import ProductCardSkeleton from './ProductCardSkeleton.jsx'

const Body = () => {
  // const [productList,setProductList] = useState(products);
  const [productList, setProductList]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  // const[element, setElement] = useState(4);

  async function fetchData(){
    const data = await fetch('https://fakestoreapi.com/products');
    const jsonData = await data.json();
    console.log(jsonData);
    setProductList(jsonData);
  }

  

  function handleTopRatedProducts(){
    const topRatedProducts = products.filter((product) => product.rating.rate > 4);
    setProductList(topRatedProducts);
  }

  // function handleAdd() {
  //   setElement(element + 1);
  // }

  return (
    <main className="product-cards">
      <div>
        <button onClick={handleTopRatedProducts}>Top Rated Products</button>
      </div>
      {productList.length === 0
        ? Array.from({ length: 4 }).map((_, index) => <ProductCardSkeleton key={index} />)
        : productList.map((product) => <ProductCard data={product} key={product.id} />)}
    </main>
  );
};

export default Body;