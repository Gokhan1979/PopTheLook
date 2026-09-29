import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({children}){
  const [cart,setCart]=useState([])

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('ptl_cart')||'[]'))
  },[])

  const addToCart = (product) => {
    const newCart=[...cart, product]
    setCart(newCart)
    localStorage.setItem('ptl_cart', JSON.stringify(newCart))
  }

  const removeFromCart = (index) => {
    const newCart=cart.filter((_,i)=>i!==index)
    setCart(newCart)
    localStorage.setItem('ptl_cart', JSON.stringify(newCart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('ptl_cart')
  }

  return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, count:cart.length}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
