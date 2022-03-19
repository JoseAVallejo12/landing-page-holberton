import React from 'react';
import './projectscard.css';
import card_background from '../../assets/img/card_background.jpg'

export const ProjectsCard = (props) => {
  return (
    <div className='projects_card'>
      {/* <img src={card_background} alt='card background' className='projects_card_img'/> */}
      <div className='projects_card_wrapper'>
        <div className='projects_card_header'>
            <span className='projects_card_span'>{props.date}</span>
            <span className='projects_card_span'>{props.city}</span>
        </div>
        <hr />
        <h2 className='projects_card_title'>{props.title}</h2>
        <p className='projects_card_legend'>{props.text}</p>
      </div>
    </div>
  );
};
