import React from 'react';
import './heroslide.css'

export const HeroSlide = (props) => {
  return (
    <div className='hero_slide'>
        <img src={props.img} alt="background img" className='hero_slide_background'/>
        <h2 className='hero_slide_title'>{props.title}</h2>
        <p className='hero_slide_legend'>{props.legend}</p>
    </div>
  )
}