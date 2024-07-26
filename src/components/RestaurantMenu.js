import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { URL_product } from "./Constant";
import Shimmer from "./Shimmer";
import useProducts from "../utils/useProducts";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { addItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";

 const RestaurantMenu = () => {
    // How to read a dyanamic URL using params.
    const {resId} = useParams();
    
  const cartitems = useSelector(store=>store.cart.items)
  const detailData = useProducts(resId)
  const dispatch = useDispatch();

  const handleAddItem=(item)=>{
    dispatch(addItem(item));
  }

  return detailData===""?<Shimmer />:(
    <div className="flex  mt-8 px-10 gap-28">
        <div className="flex flex-1 gap-4 justify-center " key='122'>
           <img className="w-80" src={detailData?.images[0]}></img>
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-end">
           <div className="flex gap-2">
           <img className="w-20 h-20 border opacity-30" src={detailData?.images[0]}></img>
                <img className="w-20 h-20 border" src={detailData?.images[1]}></img>
                <img className="w-20 h-20 border" src={detailData?.images[2]}></img>
                <img className="w-20 h-20 border" src={detailData?.images[3]}></img>
            </div>
            <h2 className="text-5xl">{detailData?.title}</h2>
            <h6>{detailData?.category}</h6>
            <h2>${detailData?.price}</h2>
             <button className="bg-orange-500 p-3 " onClick={()=>{
                       handleAddItem(detailData?.title)
             }}>Add Item</button>
         </div>
    </div>
  )

}
export default RestaurantMenu;