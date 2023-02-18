import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
    let [search, setSearch] = useSearchParams();
    const navigate = useNavigate();
    return (
      <div class='text-sm'>
         <input
         className='text-accent p-1'
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          type="search"
          placeholder="Search News"
         />
          <div>
            <button className='bg-primary p-1' onClick={() => navigate(`/search?query=${search}`)} >Search</button>
          </div>
      </div>
    )
  }

export default SearchBar;