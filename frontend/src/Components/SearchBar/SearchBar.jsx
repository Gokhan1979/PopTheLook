import { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import './SearchBar.css';

const SearchBar = ({ products, onSelectProduct }) => {
  const { display } = useSearch();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-wrap">
      <div className="search-pill">
        <input 
          type="text"
          value={query}
          onChange={(e)=> {setQuery(e.target.value); setOpen(true)}}
          onFocus={()=> setOpen(true)}
          placeholder=""
        />
        {/* Your working animated typing */}
        {!query && <span className="typed">{display}<span className="cursor">|</span></span>}
        
        <button className="search-icon">⌕</button>
      </div>

      {open && query && (
        <div className="search-results">
          {filtered.map(p => (
            <div key={p.id} onClick={()=> {onSelectProduct(p); setOpen(false)}}>
              {p.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
