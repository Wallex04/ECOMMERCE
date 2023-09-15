import React from 'react'
import './SearchProducts.css'
import searchBGImage from '../../assets/image/searchBackground.jpg'

const SearchProducts = () => {
    return (
        <div className='searchContainer'>
            <div className="searchImage">
                <img src={searchBGImage} alt="" />
            </div>

            <div className='inputText'> <article>
                <h1>search products here</h1>
            </article>
                <input className='searchInput' onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder='search' />
                {/* <button className='search'>search</button> */}
            </div>
        </div>
    )
}

export default SearchProducts