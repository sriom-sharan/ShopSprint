import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

// Creating a Redux - Store
const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;












/**
 * Create a store - using
 *          configureStore() (from redux-toolkit)
 *   
 *Provided my store to APP - using 
            <Provider store= {store}> </Provider> ( react-redux).
 * 
 * Created Slice Cart - 
 *          createSlice({     ( react-redux).
 *             name:"",
 *              initialState:"",
 *              reducers :{
 *                  addItem:(state,action)=>{state = action.payload}
 *              },
 *              });
 * 
 * export const {addItem,removeItem} = cardSlice.actions;
 * export default cartSlice.reducer;
 * 
 * Put that slice into Store
 *          {
 *              reducer:{
 *                          cart:cartSlice,
 *                       ----more slice add here---
 *                      }
 *          }
 * 
 */

