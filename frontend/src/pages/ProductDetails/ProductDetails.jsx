import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetails.css'

const productsData={
  1:{
    name:'Linen Blouse',
    price:89,
    images:[
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop&crop=top',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800'
    ],
    sizes:['XS','S','M','L','XL'],
    colors:[
      {name:'White',code:'#fff',img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800'},
      {name:'Beige',code:'#e8d5b7',img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800'},
      {name:'Black',code:'#000',img:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800'}
    ]
  },
  2:{
    name:'Rose Mesh Top',
    price:138,
    images:[
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800'
    ],
    sizes:['S','M','L'],
    colors:[
      {name:'Rose',code:'#f4a6a6',img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800'},
      {name:'White',code:'#fff',img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800'}
    ]
  }
}

export default function ProductDetails(){
  const {id}=useParams()
  const navigate=useNavigate()
  const product=productsData[id] || productsData[1]

  const [selectedSize,setSelectedSize]=useState(null)
  const [selectedColor,setSelectedColor]=useState(product.colors[0])
  const [mainImage,setMainImage]=useState(product.colors[0].img)

  const handleColorChange=(color)=>{
    setSelectedColor(color)
    setMainImage(color.img) // COLOR CHANGES PHOTO!
  }

  const addToBag=()=>{
    if(!selectedSize){
      alert('Please select size!')
      return
    }
    const cart=JSON.parse(localStorage.getItem('ptl_cart')||'[]')
    cart.push({id:Date.now(),name:product.name,price:product.price,img:mainImage,size:selectedSize,color:selectedColor.name})
    localStorage.setItem('ptl_cart',JSON.stringify(cart))
    navigate('/cart')
  }

  return(
    <div className="product-details">
      {/* LEFT - PHOTOS */}
      <div className="photos-section">
        <div className="main-photo-wrapper">
          <img src={mainImage} className="main-photo" alt="product"/>
        </div>
        {/* THUMBNAILS UNDERNEATH - NOT LEFT! */}
        <div className="thumbnails-underneath">
          {product.images.map((img,i)=>(
            <img key={i} src={img} onClick={()=>setMainImage(img)} className={mainImage===img? 'thumb active' : 'thumb'} alt="thumb"/>
          ))}
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="details-section">
        <h1 className="prod-name">{product.name}</h1>
        <p className="prod-price">£{product.price}</p>

        {/* COLORS - CHANGES PHOTO */}
        <div className="option-block">
          <p className="option-label">COLOR: {selectedColor.name}</p>
          <div className="colors-row">
            {product.colors.map((c,i)=>(
              <div key={i} onClick={()=>handleColorChange(c)} className={selectedColor.name===c.name? 'color-dot active' : 'color-dot'} style={{background:c.code, border: c.code==='#fff'? '1px solid #ddd' : '1px solid transparent'}} title={c.name}></div>
            ))}
          </div>
        </div>

        {/* SIZES - BLACK WHEN CLICKED */}
        <div className="option-block">
          <p className="option-label">SIZE</p>
          <div className="sizes-row">
            {product.sizes.map((s)=>(
              <div key={s} onClick={()=>setSelectedSize(s)} className={selectedSize===s? 'size-box selected' : 'size-box'}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <button onClick={addToBag} className="add-bag-btn">ADD TO BAG 👜</button>

        <div className="info-accordions">
          <p>✓ Free shipping over £100</p>
          <p>✓ Free returns within 30 days</p>
          <p>✓ Sustainable fabric</p>
        </div>
      </div>
    </div>
  )
}
