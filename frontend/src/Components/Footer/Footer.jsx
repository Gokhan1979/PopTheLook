import './Footer.css'
export default function Footer(){
  return(
    <footer style={{background:'#000',color:'#fff',padding:'40px 20px',textAlign:'center',marginTop:'40px'}}>
      <h3 style={{letterSpacing:'4px'}}>POP THE LOOK</h3>
      <p style={{fontSize:'11px',marginTop:'10px',color:'#999'}}>© 2026 POP THE LOOK - All rights reserved</p>
      <div style={{display:'flex',gap:'20px',justifyContent:'center',marginTop:'20px',fontSize:'11px'}}>
        <span>About</span><span>Contact</span><span>Shipping</span><span>Returns</span>
      </div>
    </footer>
  )
}
