import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storecontext = createContext(null)

const storecontextprovider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <storecontext.Provider value={contextvalue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default storecontextprovider;