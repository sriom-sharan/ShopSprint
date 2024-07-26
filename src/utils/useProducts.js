import { useState, useEffect } from "react";

// Creating a Hooks.
const useProducts = (resId) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
      getData();
  }, []);

  async function getData() {
    const data = await fetch(`https://dummyjson.com/products/${resId}`);
    const json = await data.json();
    console.log(json);
    setProducts(json);
  }
  return products;
};
export default useProducts;
