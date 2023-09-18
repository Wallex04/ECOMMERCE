// import React from 'react'
// import { useState } from 'react'
// import './SearchProducts.css'
// import searchBGImage from '../../assets/image/searchBackground.jpg'

// const SearchProducts = () => {
//     const [search, setSearch] = useState([])
   
       
  
//         const getItems = async () => {
//           try {
//             const res = await fetch("https://dummyjson.com/products")
//             const data = await res.json();
//             setSearch(data.products)
//           }
//           catch (error) {
//             console.log('error fetching data:', error);
//           }
//         }

//         useEffect(() => {
//           getItems();
//         }, []);

//         return (
        
//         <div className='searchContainer'>
//             <div className="searchImage">
//                 <img src={searchBGImage} alt="" />
//             </div>

//             <div className='inputText'> <article>
//                 <h1>search products here</h1>
//             </article>
//                 <input className='searchInput' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search' />
//             </div>
//         </div>
//     )
// }

// export default SearchProducts


import React, { useState, useEffect } from 'react';
import './SearchProducts.css';
import searchBGImage from '../../assets/image/searchBackground.jpg';

const SearchProducts = () => {
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State variable for search query
  const [filteredSearch, setFilteredSearch] = useState([]);

  const getItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setSearch(data.products);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  // Update the filteredSearch state whenever the search query changes
//   useEffect(() => {
//     const filteredResults = search.filter(item =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredSearch(filteredResults);
//   }, [search, searchQuery]);

useEffect(() => {
    const filteredResults = search.filter(item =>
      item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSearch(filteredResults);
  }, [search, searchQuery]);

  return (
    <div className='searchContainer'>
      <div className="searchImage">
        <img src={searchBGImage} alt="" />
      </div>

      <div className='inputText'>
        <article>
          <h1>Search products here</h1>
        </article>
        <input
          className='searchInput'
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          type="text"
          placeholder='Search'
        />
      </div>

      {/* Display filtered search results */}
      <div style={{backgroundColor:'red'}} className="searchResults">
        {filteredSearch.map((item) => (
          <div key={item.id} className="searchResultItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;