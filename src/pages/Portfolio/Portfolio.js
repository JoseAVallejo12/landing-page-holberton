import React from 'react'
import { PortfolioCard } from '../../components/portfolio-card/PortfolioCard'
import iconTarget from '../../assets/icons/icon-target.png'
import pic01 from '../../assets/img/card01.jpg'
import pic02 from '../../assets/img/card02.jpg'
import pic03 from '../../assets/img/card03.jpeg'
import pic04 from '../../assets/img/card04.jpeg'
import worker from '../../assets/img/worker.png'
import './portfolio.css'

let info = [
  {
    'title':'Cement',
    'img': pic01
  },
  {
    'title':'Metalurgical',
    'img': pic02
  },
  {
    'title':'Plastic',
    'img': pic03
  },
  {
    'title':'Petrochemical',
    'img': pic04
  },
  {
    'title':'Food & Beverage',
    'img': pic01
  },
  {
    'title':'Oil & Gas',
    'img': pic02
  },
  {
    'title':'Mining',
    'img': pic03
  }
]

export default function Portfolio() {
  return (
    <section className='portfolio_section'>
      <div className='portfolio_gradient'/>
      <div className='portfolio_intro'>
        <div className='portfolio_top'>
          <img src={iconTarget} alt='icon-target' className='portfolio_icon'/>
          <h2 className='portfolio_company'><span>Autoequic</span> Automation</h2>
        </div>
        <p className='portfolio_read'>We are your qualified partner on Industry, our services has diversity and very high standards, we’re supported by most important brands as solution developers. Our portfolio covers almost all industries, cement, plastic, metalurgical, petrochemical, and we are specialized into processes optimization.</p>
      </div>
      <div className='portfolio_info'>
        <div className='portfolio_info_top'>
          <img src={worker} alt={worker} className='portfolio_info_img'/>
        </div>
        <div className='portfolio_info_bottom'>
          {info.map((item, index) => {
              return (
                <PortfolioCard img={item.img} title={item.title}/>
              )
          })}
        </div>
      </div>
    </section>
  )
}
