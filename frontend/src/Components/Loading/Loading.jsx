import './Loading.css'
export default function Loading(){
  return(
    <div className="loading-screen">
      <div className="spinner"></div>
      <p style={{letterSpacing:'4px',fontSize:'11px',marginTop:'20px'}}>POP THE LOOK</p>
    </div>
  )
}
