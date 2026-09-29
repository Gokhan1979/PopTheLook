import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Shop.css'

const allProducts=[
  {id:1,name:'Linen Blouse',price:89,cat:'Blouses',img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600'},
  {id:2,name:'Rose Mesh Top',price:138,cat:'Tops',img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600'},
  {id:3,name:'Wrap Dress',price:145,cat:'Dresses',img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600'},
  {id:4,name:'Silk Skirt',price:125,cat:'Skirts',img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600'},
  {id:5,name:'Knit Cardigan',price:110,cat:'Knitwear',img:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600'},
  {id:6,name:'Wide Leg Trousers',price:135,cat:'Trousers',img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600'},
]

export default function Shop(){
  const [searchParams]=useSearchParams()
  const searchQ=searchParams.get('search')||''
  const [filter,setFilter]=useState(searchQ)
  const navigate=useNavigate()

  useEffect(()=>{ setFilter(searchQ) },[searchQ])

  const filtered=allProducts.filter(p=>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.cat.toLowerCase().includes(filter.toLowerCase())
  )

  return(
    <div style={{maxWidth:'1300px',margin:'0 auto',padding:'20px'}}>
      <h1 style={{letterSpacing:'4px',fontFamily:'serif',textAlign:'center',margin:'20px 0'}}>
        SHOP {filter && `- "${filter}"`}
      </h1>
      {filter && <p style={{textAlign:'center',fontSize:'11px',marginBottom:'20px'}}>{filtered.length} results found <span onClick={()=>navigate('/shop')} style={{textDecoration:'underline',cursor:'pointer',marginLeft:'10px'}}>Clear</span></p>}

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px'}}>
        {filtered.map(p=>(
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{cursor:'pointer',background:'#fff'}}>
            <img src={p.img} style={{width:'100%',height:'420px',objectFit:'cover'}}/>
            <div style={{padding:'10px'}}>
              <p style={{fontSize:'10px',color:'#999',letterSpacing:'1px'}}>{p.cat}</p>
              <p style={{fontSize:'13px',margin:'4px 0'}}>{p.name}</p>
              <b style={{fontSize:'12px'}}>£{p.price}</b>
            </div>
          </div>
        ))}
      </div>
      {filtered.length===0 && <p style={{textAlign:'center',marginTop:'40px'}}>No products found for "{filter}"</p>}
    </div>
  )
}
