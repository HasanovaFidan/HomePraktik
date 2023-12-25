import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Basket.Slice";

const store=configureStore({
    reducer:{
        items:BasketSlice
       
    }
    
   })
   export default store