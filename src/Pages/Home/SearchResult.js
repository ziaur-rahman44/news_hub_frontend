import React, { useEffect, useState } from "react";
import {  useLocation, useParams} from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { slug } = useParams();

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(`https://news-hub-server-six.vercel.app/shownews/search?query=${query}`); 
        setSearchResults(data);
        } catch (error) {
         setError(error.response?.data?.message);
         }
        };
         searchProduct();
       }, [query]);
    return (
        <div>
        {searchResults.map((searchResult) => (
          <div
            key={searchResult._id}>
            <p>{searchResult.title}</p>
          </div>
        ))}
      </div>
    );
};

export default SearchResult;