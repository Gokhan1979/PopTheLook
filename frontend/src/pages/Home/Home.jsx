import { useState, useEffect } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Home.css'; // we will create next

const Home = () => {
  const [products] = useState([
    {id:1,name:'Linen Blouse - White',price:89,cat:'Blouses',img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800'},
    {id:2,name:'Rose Mesh Top',price:138,cat:'Tops',img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800'},
    {id:3,name:'Wrap Dress - Floral',price:145,cat:'Dresses',img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800'},
  ]);

  const user = localStorage.getItem('user');

  return (
    <div>
      <div className="hero">
        <div style={{maxWidth:'340px'}}>
          <p style={{fontSize:'10px',letterSpacing:'3px'}}>NEW IN</p>
          <h1 className="serif" style={{fontSize:'42px',lineHeight:1,margin:'10px 0'}}>SUMMER BLOOMS</h1>
          <button className="btn-black" onClick={()=> window.location.href='/shop'}>SHOP NOW →</button>
        </div>
      </div>

      <div style={{textAlign:'center',padding:'30px 0 10px'}}>
        <h2 className="serif" style={{fontSize:'28px'}}>Best Sellers</h2>
        <p style={{fontSize:'11px',color:'#666'}}>
          {user? `Welcome, ${user}` : 'SHOP OUR FAVORITES'}
        </p>
      </div>

      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
