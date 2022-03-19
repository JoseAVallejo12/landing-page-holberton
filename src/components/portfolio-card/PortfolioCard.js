import React from 'react';
import './portfoliocard.css'

export const PortfolioCard = (props) => {
  return (
    <div className='portfolio_card'>
        <img src={props.img} alt='picture' className='portfolio_img'/>
        <span className='portfolio_title'>{props.title}</span>
   </div>
  )
}
