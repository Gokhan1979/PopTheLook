import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar(){
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState('')
  const navigate=useNavigate()

  const doSearch=()=>{
    if(q.trim()){
      navigate(`/shop?search=${q}`)
      setOpen(false)
      setQ('')
    }
  }

  return(
    <div className="search-middle">
      {/* Icon - click to open */}
      {!open ? (
        <div className="search-icon-closed" onClick={()=>setOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>SEARCH</span>
        </div>
      ) : (
        <div className="search-box-open">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            autoFocus
            value={q}
            onChange={e=>setQ(e.target.value)}
            onKeyDown={e=>{
              if(e.key==='Enter') doSearch()
              if(e.key==='Escape') setOpen(false)
            }}
            placeholder="Search for products..."
          />
          <span className="close-x" onClick={()=>setOpen(false)}>✕</span>
        </div>
      )}
    </div>
  )
}
