import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./ProductReducer";


const store=configureStore({reducer:productreducer});


export default store;