export default function About(){
  return(
    <div style={{maxWidth:'800px',margin:'60px auto',padding:'20px',textAlign:'center'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'5px',fontSize:'36px'}}>POP THE LOOK</h1>
      <p style={{marginTop:'30px',lineHeight:'1.8',color:'#555',fontSize:'14px'}}>Founded in 2024, POP THE LOOK is a luxury fashion brand inspired by summer blooms. We believe every woman deserves to feel confident and elegant. Our collections are crafted with sustainable fabrics and timeless design.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'50px'}}>
        <div style={{background:'#f9f9f9',padding:'20px'}}><h3 style={{letterSpacing:'2px'}}>100%</h3><p style={{fontSize:'11px',color:'#999',marginTop:'8px'}}>Sustainable</p></div>
        <div style={{background:'#f9f9f9',padding:'20px'}}><h3 style={{letterSpacing:'2px'}}>50K+</h3><p style={{fontSize:'11px',color:'#999',marginTop:'8px'}}>Happy Customers</p></div>
        <div style={{background:'#f9f9f9',padding:'20px'}}><h3 style={{letterSpacing:'2px'}}>FREE</h3><p style={{fontSize:'11px',color:'#999',marginTop:'8px'}}>Shipping & Returns</p></div>
      </div>
    </div>
  )
}
