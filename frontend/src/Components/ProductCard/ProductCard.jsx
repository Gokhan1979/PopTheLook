import { Link } from 'react-router-dom'

export default function ProductCard({ product }){
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    const existing = cart.find(p=> p._id === product._id);
    if(existing){
      existing.qty += 1;
    } else {
      cart.push({...product, qty: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }

  return (
    <div style={{border:'1px solid #eee', background:'white', overflow:'hidden'}}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} style={{width:'100%', height:300, objectFit:'cover'}}/>
      </Link>
      <div style={{padding:15}}>
        <Link to={`/product/${product._id}`} style={{textDecoration:'none', color:'black'}}>
          <h3 style={{fontFamily:'serif', margin:'5px 0', fontSize:16}}>{product.name}</h3>
        </Link>
        <p style={{color:'#666', fontSize:14, margin:'5px 0'}}>{product.description?.slice(0,50)}...</p>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
          <strong style={{fontSize:18}}>£{product.price}</strong>
          <span style={{fontSize:12}}>⭐ {product.rating||'4.7'} ({product.reviews||'12'})</span>
        </div>
        <button onClick={addToCart} style={{width:'100%', background:'black', color:'white', padding:10, border:'none', marginTop:10, cursor:'pointer'}}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
