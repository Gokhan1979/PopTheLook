export default function Profile(){
 return <div style={{maxWidth:500, margin:'50px auto'}}>
  <h1>Complete your profile</h1>
  <form>
   <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
    <input placeholder="Name" required/><input placeholder="Surname" required/>
   </div>
   <input placeholder="Street Name" style={{width:'100%', marginTop:10}} required/>
   <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:10}}>
    <input placeholder="City" required/><input placeholder="Postcode" required/>
   </div>
   <select style={{width:'100%', marginTop:10}}><option>United Kingdom</option><option>Turkey</option><option>USA</option></select>
   <input placeholder="Country" style={{width:'100%', marginTop:10}}/>
   <button style={{width:'100%', background:'black', color:'white', padding:14, marginTop:20}}>SAVE PROFILE</button>
  </form>
 </div>
}
