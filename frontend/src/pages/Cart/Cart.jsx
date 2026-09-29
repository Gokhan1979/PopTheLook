import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Cart(){
  const [cart,setCart] = useState([]);
  
  useEffect(()=>{ setCart(JSON.parse(localStorage.getItem('cart')||'[]')) },[]);

  const updateQty = (id, qty) => {
    let newCart = cart.map(p=> p._id===id? {...p, qty: Math.max(1, qty)}:p);
    if(qty <=0) newCart = newCart.filter(p=> p._id!==id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const total = cart.reduce((s,p)=> s + p.price * p.qty, 0);

  return <div style={{maxWidth:900, margin:'40px auto', padding:20}}>
    <h1 style={{fontFamily:'serif'}}>Shopping Cart</h1>
    {cart.length===0? <p>Cart empty <Link to="/shop">Go Shop</Link></p> : 
    <>
      {cart.map(item=> (
        <div key={item._id} style={{display:'flex', gap:20, borderBottom:'1px solid #eee', padding:'20px 0'}}>
          <img src={item.image} style={{width:120, height:150, objectFit:'cover'}}/>
          <div style={{flex:1}}>
            <h3>{item.name}</h3>
            <p>£{item.price}</p>
            <div>
              <button onClick={()=> updateQty(item._id, item.qty-1)}>-</button>
              <span style={{margin:'0 15px'}}>{item.qty}</span>
              <button onClick={()=> updateQty(item._id, item.qty+1)}>+</button>
            </div>
          </div>
          <strong>£{item.price * item.qty}</strong>
        </div>
      ))}
      <div style={{textAlign:'right', marginTop:20}}>
        <h2>Total: £{total}</h2>
        <Link to="/checkout" style={{background:'black', color:'white', padding:'15px 40px', textDecoration:'none', display:'inline-block', marginTop:10}}>PROCEED TO CHECKOUT</Link>
      </div>
    </>
    }
  </div>
}
