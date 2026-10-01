import React from 'react';

const Home = () => {
  return (
    <div style={{background:'#fff'}}>
      {/* HEADER - From your demo */}
      <header style={{display:'flex', justifyContent:'space-between', padding:'20px 40px', borderBottom:'1px solid #eee', alignItems:'center'}}>
        <h1 className="serif" style={{fontSize:'28px', letterSpacing:'4px', fontWeight:'500'}}>VETRA</h1>
        <nav style={{display:'flex', gap:'20px', fontSize:'11px', letterSpacing:'1px'}}>
          <a href="#">SHOP</a>
          <a href="#">NEW</a>
          <a href="#">ABOUT</a>
        </nav>
        <div style={{fontSize:'11px'}}>CART (0)</div>
      </header>

      {/* HERO - Your pink hero from demo */}
      <section style={{background:'#ffeef0', textAlign:'center', padding:'80px 20px'}}>
        <h2 className="serif" style={{fontSize:'64px', fontWeight:'400', lineHeight:'1'}}>New Collection</h2>
        <p style={{marginTop:'15px', fontSize:'13px', letterSpacing:'2px', color:'#666'}}>EFFORTLESS • FEMININE • MODERN</p>
        <button className="btn-black" style={{marginTop:'30px'}}>SHOP NOW</button>
      </section>

      {/* PRODUCTS GRID - Your 3 column grid */}
      <section>
        <h3 className="serif" style={{textAlign:'center', fontSize:'32px', margin:'50px 0 20px'}}>Best Sellers</h3>
        <div className="grid">
          <div style={{border:'1px solid #eee'}}>
            <div style={{background:'#f9f9f9', height:'350px', display:'flex', alignItems:'center', justifyContent:'center'}}>Image 1</div>
            <div style={{padding:'15px'}}>
              <p style={{fontSize:'12px', letterSpacing:'1px'}}>SATIN DRESS</p>
              <p style={{fontSize:'12px', color:'#666', marginTop:'5px'}}>$120.00</p>
            </div>
          </div>
          <div style={{border:'1px solid #eee'}}>
            <div style={{background:'#f9f9f9', height:'350px', display:'flex', alignItems:'center', justifyContent:'center'}}>Image 2</div>
            <div style={{padding:'15px'}}>
              <p style={{fontSize:'12px', letterSpacing:'1px'}}>SILK TOP</p>
              <p style={{fontSize:'12px', color:'#666', marginTop:'5px'}}>$85.00</p>
            </div>
          </div>
          <div style={{border:'1px solid #eee'}}>
            <div style={{background:'#f9f9f9', height:'350px', display:'flex', alignItems:'center', justifyContent:'center'}}>Image 3</div>
            <div style={{padding:'15px'}}>
              <p style={{fontSize:'12px', letterSpacing:'1px'}}>LINEN PANTS</p>
              <p style={{fontSize:'12px', color:'#666', marginTop:'5px'}}>$95.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#0e0e0e', color:'#fff', textAlign:'center', padding:'40px', marginTop:'60px', fontSize:'11px', letterSpacing:'2px'}}>
        VETRA © 2026
      </footer>
    </div>
  );
};

export default Home;
