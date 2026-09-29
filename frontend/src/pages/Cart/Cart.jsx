import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

export default function Cart(){
  const [cart,setCart]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('ptl_cart')||'[]'))
  },[])

  const remove=(index)=>{
    const newCart=cart.filter((_,i)=>i!==index)
    setCart(newCart)
    localStorage.setItem('ptl_cart',JSON.stringify(newCart))
  }

  const total=cart.reduce((s,i)=>s+i.price,0)

  const checkout=()=>{
    if(!localStorage.getItem('user')){
      alert('Please SIGN IN first!')
      navigate('/login')
      return
    }
    alert(`Order placed! Total £${total}`)
    localStorage.removeItem('ptl_cart')
    setCart([])
    navigate('/')
  }

  if(cart.length===0) return(
    <div style={{textAlign:'center',padding:'100px 20px'}}>
      <div style={{fontSize:'40px',marginBottom:'20px'}}>👜</div>
      <h2 style={{fontFamily:'serif',letterSpacing:'2px'}}>YOUR BAG IS EMPTY</h2>
      <button onClick={()=>navigate('/shop')} style={{background:'black',color:'white',padding:'12px 24px',border:'none',marginTop:'20px',letterSpacing:'1px',cursor:'pointer'}}>CONTINUE SHOPPING</button>
    </div>
  )

  return(
    <div style={{maxWidth:'900px',margin:'0 auto',padding:'20px',display:'grid',gridTemplateColumns:'1fr 320px',gap:'30px'}}>
      <div>
        <h2 style={{letterSpacing:'3px',fontFamily:'serif',marginBottom:'20px'}}>SHOPPING BAG ({cart.length})</h2>
        {cart.map((item,i)=>(
          <div key={i} style={{display:'flex',gap:'15px',borderBottom:'1px solid #eee',padding:'15px 0'}}>
            <img src={item.img} style={{width:'80px',height:'100px',objectFit:'cover'}}/>
            <div style={{flex:1}}>
              <p style={{fontSize:'13px'}}>{item.name}</p>
              <b style={{fontSize:'12px'}}>£{item.price}</b>
              <p onClick={()=>remove(i)} style={{fontSize:'10px',textDecoration:'underline',cursor:'pointer',marginTop:'10px',color:'#999'}}>REMOVE</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:'#f9f9f9',padding:'20px',height:'fit-content'}}>
        <h3 style={{letterSpacing:'2px',fontSize:'13px'}}>ORDER SUMMARY</h3>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',fontSize:'13px'}}><span>Subtotal</span><span>£{total}</span></div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px',fontSize:'13px'}}><span>Shipping</span><span>FREE</span></div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px',borderTop:'1px solid #ddd',paddingTop:'15px',fontWeight:'bold'}}><span>TOTAL</span><span>£{total}</span></div>
        <button onClick={checkout} style={{background:'black',color:'white',width:'100%',padding:'14px',border:'none',marginTop:'20px',letterSpacing:'2px',cursor:'pointer'}}>CHECKOUT</button>
        <p style={{fontSize:'10px',color:'#999',textAlign:'center',marginTop:'10px'}}>SIGN OUT will clear your session</p>
      </div>
    </div>
  )
}
