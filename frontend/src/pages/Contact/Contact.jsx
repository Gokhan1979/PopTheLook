export default function Contact(){
  return(
    <div style={{maxWidth:'600px',margin:'60px auto',padding:'20px'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'4px',textAlign:'center'}}>CONTACT US</h1>
      <p style={{textAlign:'center',color:'#999',fontSize:'11px',marginTop:'10px',letterSpacing:'1px'}}>We reply within 24 hours</p>
      <div style={{marginTop:'40px'}}>
        <input placeholder="Your Email" style={{width:'100%',padding:'12px',border:'1px solid #ddd',marginBottom:'12px'}}/>
        <textarea placeholder="Your Message" rows="5" style={{width:'100%',padding:'12px',border:'1px solid #ddd'}}></textarea>
        <button style={{background:'black',color:'white',width:'100%',padding:'14px',border:'none',marginTop:'15px',letterSpacing:'2px',cursor:'pointer'}}>SEND MESSAGE</button>
      </div>
    </div>
  )
}
