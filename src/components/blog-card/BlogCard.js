import React from 'react';
import './blogcard.css'
import separator from '../../assets/icons/icon-separator.png'

export const BlogCard = () => {
  return (
    <div className='blog_card'>
        <img src={separator} alt='separator' className='blog_card_icon'/>
        <p className='blog_card_text'>Migración de motores de anillos rozantes a servomotores asincrónicos con torque cons...</p>
        <span className='blog_card_date'>23-jan-2021</span>
    </div>
  )
}
