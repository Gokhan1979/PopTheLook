import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar(){
  const [query,setQuery]=useState('')
  const [isFocused,setIsFocused]=useState(false)
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault()
    if(query.trim()){
      navigate(`/shop?search=${query}`)
      setQuery('')
    }
  }

  return(
    <form onSubmit={handleSearch} className={`search-bar ${isFocused? 'focused' : ''}`}>
      <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
        placeholder="Search..."
        className="search-input"
      />
      <button type="submit" className="search-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
    </form>
  )
}
