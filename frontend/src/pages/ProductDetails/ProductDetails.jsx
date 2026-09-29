import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function ProductDetails(){
  const { id } = useParams();
  const [size,setSize]=useState('M');
  const product = {name:'Floral Mesh Button Top - Rose', price:138, image:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500', desc:'Sheer rose mesh top featuring delicate floral embroidery and black mother-of-pearl buttons.'};

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push({...product, _id:id, qty:1, size});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added!');
  }

  return <div style={{maxWidth:1100, margin:'40px auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, padding:20}}>
    <img src={product.image} style={{width:'100%', height:600, objectFit:'cover'}}/>
    <div>
      <p>Home / Shop / Product Details</p>
      <h1 style={{fontFamily:'serif'}}>{product.name}</h1>
      <p>⭐⭐⭐⭐⭐ 4.7 (56 reviews)</p>
      <h2>£{product.price}</h2>
      <p>{product.desc}</p>
      <p style={{marginTop:20}}><strong>Size</strong></p>
      <div style={{display:'flex', gap:10}}>
        {['XS','S','M','L','XL'].map(s=> <button key={s} onClick={()=>setSize(s)} style={{padding:'10px 15px', border:'1px solid black', background: size===s? 'black':'white', color: size===s? 'white':'black'}}>{s}</button>)}
      </div>
      <button onClick={addToCart} style={{width:'100%', background:'black', color:'white', padding:16, marginTop:20, border:'none'}}>ADD TO CART</button>
      <p style={{marginTop:15, fontSize:13}}>✓ Free returns within 30 days<br/>✓ Secure payment | Free UK delivery over £100</p>
    </div>
  </div>
}
