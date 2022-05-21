import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { HeroSlide } from '../../components/hero-slide/HeroSlide';
import background01 from '../../assets/img/background01.jpg'
import background02 from '../../assets/img/background02.jpg'
import 'react-multi-carousel/lib/styles.css';
import './hero.css'
import { getHeroInfo } from '../../api/hero/heroService';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const data = [
  {
    "img": background01,
    "title": "Leading Processes",
    "legend": "Here in Autoequick we’re passionate about process automation, commited to find highest quality-performance solutions Here in Autoequick we’re passionate about process automation, commited to find highest quality-performance solutions"
  },
  {
    "img": background02,
    "title": "Best solutions",
    "legend": "We deal with most hard processes everyday on every industry sector"
  },
  {
    "img": background01,
    "title": "Qualified Engineers",
    "legend": "Our colaborators are exceptional on every sector and practically 24/7"
  }
]

export default function Hero() {
  useEffect(() => {
    getHeroInfo().then(res => {
      console.log({ res })
    })
  }, [])
  return (
    <div className='hero_main'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        className='hero_carousel'
        transitionDuration={500}
      >
        <HeroSlide {...data[0]} />
        <HeroSlide {...data[1]} />
        <HeroSlide {...data[2]} />
      </Carousel>
    </div>
  )
}
