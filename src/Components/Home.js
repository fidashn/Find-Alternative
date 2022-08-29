import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

function Home() {
  return (
    <div className='product-container'>
      <div className="product-img"></div>
      <div className="product-short-info">
        <p className="product-short-info-p">
          Sony 85 Inch Bravia Xr X95J Full Array Led Smart Google Tv,
          4K Ultra Hd High Dynamic Range Hdr, Xr-85X95J, 2021 Model</p>
        <button className='discount'>7% off</button>
      </div>
      <div className="rating">
        <div className="rating-numeric">9.8</div>
        <div className="rating-stars"></div>
      </div>
      <div className="more-info">
      <button className='view-deal-btn'>View Deal</button>
      <div className="show-more">
      <button className='on-amazon-btn'>On Amazon</button>
      <button className='show-more-btn'>Show More <RiArrowDownSLine /></button>
      </div>
      </div>
    </div>
  )
}

export default Home