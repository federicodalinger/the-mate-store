import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState ([])

    const addItem = (product, qty) => {
        
        const isInCart = cartList.find(item => item.id === product.id); //devuelve array con primer elemento del condicional, sino es "null" y entra en el "else".
        
        if (isInCart) {
            product.qty =product.qty + qty;
            setCartList(cartList)
        }

        else {
            product.qty = qty;
            setCartList([...cartList,product]);
        }
        
    }

    const clear = () => {
        setCartList([])
        ;
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id)) //creo un array con elementos diferentes al ID seleccionado
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;