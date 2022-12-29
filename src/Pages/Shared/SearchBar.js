import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
    let [search, setSearch] = useSearchParams();
    const navigate = useNavigate();
    return (
      <div>
         <input
         className='text-accent'
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          type="search"
          placeholder="Search News"
         />
          <div>
            <button className='bg-primary' onClick={() => navigate(`/search?query=${search}`)} >Search</button>
          </div>
      </div>
    )
  }

export default SearchBar;