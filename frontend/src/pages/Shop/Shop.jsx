import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'

export default function Shop(){
  const [products,setProducts] = useState([
    {_id:'1', name:'Floral Mesh Button Top - Olive', price:138, image:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500', rating:4.8, reviews:32},
    {_id:'2', name:'Floral Mesh Button Top - Rose', price:138, image:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500', rating:4.7, reviews:56},
    {_id:'3', name:'Linen Button Blouse Cream', price:89, image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500', rating:4.6, reviews:18},
    {_id:'4', name:'Embroidered Puff Dress', price:128, image:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500', rating:4.9, reviews:41},
    {_id:'5', name:'Silk Wrap Dress Navy', price:145, image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500', rating:4.5, reviews:27},
    {_id:'6', name:'Ruffled Cotton Shirt White', price:92, image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500', rating:4.7, reviews:22},
  ]);

  return <div style={{padding:20, maxWidth:1200, margin:'0 auto'}}>
    <h1 style={{fontFamily:'serif'}}>Tops & Dresses</h1>
    <p>24 Products • Filters | Sort: Recommended</p>
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:20, marginTop:20}}>
      {products.map(p=> <ProductCard key={p._id} product={p} />)}
    </div>
  </div>
}
