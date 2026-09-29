export default function CartDrawer({ isOpen, onClose }){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const total = cart.reduce((sum,p)=> sum + (p.price * p.qty), 0);

  if(!isOpen) return null;

  return <div style={{position:'fixed', right:0, top:0, width:400, height:'100%', background:'white', boxShadow:'-5px 0 20px rgba(0,0,0,0.2)', zIndex:2000, padding:20, overflowY:'auto'}}>
    <button onClick={onClose} style={{float:'right', border:'none', background:'none', fontSize:20}}>✕</button>
    <h2>Your Cart ({cart.length})</h2>
    {cart.map(item=> (
      <div key={item._id} style={{display:'flex', gap:10, marginBottom:15, borderBottom:'1px solid #eee', paddingBottom:10}}>
        <img src={item.image} style={{width:70, height:90, objectFit:'cover'}}/>
        <div style={{flex:1}}>
          <strong>{item.name}</strong><br/>
          Qty: {item.qty}<br/>
          £{item.price * item.qty}
        </div>
      </div>
    ))}
    <h3>Total: £{total}</h3>
    <a href="/checkout" style={{display:'block', background:'black', color:'white', padding:15, textAlign:'center', textDecoration:'none', marginTop:20}}>CHECKOUT</a>
  </div>
}
