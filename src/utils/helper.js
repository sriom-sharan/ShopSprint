// Best place to write FUNCTIONS for :-
// 🧿Readability
// 🧿Reusability
// 🧿Testable
// 🧿Maintainable - easy to debug.
// 🧿Modularity - codes broken down to meaningfull pieces.
import { useEffect, useState } from 'react'
import { URL_product } from '../components/Constant';

export const ProductList = ()=>{
    const [goods, setGoods] = useState("");

    useEffect(() => {
        getProducts();
    }, []);
  
    async function getProducts() {
      const d = await fetch(URL_product);
      const j = await d.json();
      console.log(j);
      setGoods(j?.products);
    }
    console.log(goods)
    return goods;

}