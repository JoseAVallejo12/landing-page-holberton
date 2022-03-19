import React from 'react'
import Carousel from 'react-multi-carousel'
import { ProjectsCard } from '../../components/projects-card/ProjectsCard';
import iconTarget from '../../assets/icons/icon-target.png'
import 'react-multi-carousel/lib/styles.css';
import './projects.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const data = [
  {
    "date": "23/Sept/2021",
    "city": "Barranquilla",
    "title": "Modernización de planta de tratamiento de agua residual",
    "text": "Se implemento una migración de los PLC actuales a unos de última tecnología, al igual que el sistema de bombeo controlado por motores de anillos rozantes fue migrado a tecnología de servomotores asincrónicos con torque constante y control vectorial. Se mejoró el rendimiento del proceso, y se redujo considerablemente el número de paradas de mantenimiento debido a los nuevos motores libres de mantenimiento y embobinados rotóricos variables."
  },
]

export default function Projects() {
  return (
    <div className='projects_main'>
      <div className='projects_top'>
        <img src={iconTarget} alt='icon-target' className='projects_icon'/>
        <h2 className='projects_company'><span>We are Proud of our</span> Achievements</h2>
      </div>
      <p className='projects_read'>We are your qualified partner on Industry, our services has diversity and very high standards, we’re supported by most important brands as solution developers. Our portfolio covers almost all industries, cement, plastic, metalurgical, petrochemical, and we are specialized into processes optimization.</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        className='projects_carousel'
        transitionDuration={500}
        itemClass="carousel-item-padding-40-px"
      >
        <ProjectsCard {...data[0]}/>
        <ProjectsCard {...data[0]}/>
        <ProjectsCard {...data[0]}/>
        <ProjectsCard {...data[0]}/>
      </Carousel>
    </div>
  )
}
