import React from 'react';
import './contactcard.css';

export const ContactCard = (props) => {
  return (
    <div className='contact_card'>
        <img src={props.img} alt='contact_img' className='contact_card_img'/>
        <div className='contact_card_info'>
            <h3 className='contact_card_role'>{props.role}</h3>
            <p className='contact_card_p'>Name: <span className='contact_card_span'>{props.name}</span></p>
            <p className='contact_card_p'>Email: <span className='contact_card_span'>{props.email}</span></p>
            <p className='contact_card_p'>Whatsapp: <span className='contact_card_span'>{props.phone}</span></p>
        </div>
    </div>
  )
}
