import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const [cart,setCart]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{ setCart(JSON.parse(localStorage.getItem('ptl_cart')||'[]')) },[])
  const total=cart.reduce((s,i)=>s+i.price,0)

  return(
    <div style={{maxWidth:'600px',margin:'40px auto',padding:'20px'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'4px',textAlign:'center'}}>CHECKOUT</h1>
      <div style={{marginTop:'30px'}}>
        {cart.map((i,idx)=><div key={idx} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #eee',fontSize:'13px'}}><span>{i.name}</span><span>£{i.price}</span></div>)}
        <div style={{display:'flex',justifyContent:'space-between',padding:'15px 0',fontWeight:'bold',marginTop:'10px'}}><span>TOTAL</span><span>£{total}</span></div>
        <button onClick={()=>{
          alert('Order Success! Thank you 👜')
          localStorage.removeItem('ptl_cart')
          navigate('/')
        }} style={{background:'black',color:'white',width:'100%',padding:'14px',border:'none',marginTop:'20px',letterSpacing:'2px',cursor:'pointer'}}>PAY £{total}</button>
      </div>
    </div>
  )
}
