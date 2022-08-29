import React from 'react'

function Home() {
  return (
    <div className='product-container'>
      <div className="product-img"></div>
      <div className="product-short-info">
        <p className="product-short-info-p"></p>
        <button className='discount'></button>
      </div>
      <div className="rating">
        <div className="rating-numeric"></div>
        <div className="rating-stars"></div>
      </div>
      <div className="more-info">
      <button className='view-deal-btn'></button>
      <button className='on-amazon-btn'></button>
      <button className='show-more-btn'></button>
      </div>
    </div>
  )
}

export default Home