import React from 'react';
import wave_top from '../../../src/assets/img/wave_top.png';
import wave_bottom from '../../../src/assets/img/wave_bottom.png';
import plc01 from '../../../src/assets/img/plc01.png'
import plc02 from '../../../src/assets/img/plc02.png'
import arrows from '../../../src/assets/img/arrows01.png';
import './about.css'

export default function About() {
  return (
    <div className='about_div'>

      <img src={wave_top} alt="wave_top" className='about_wave_top' />

      <div className='about_care'>
        <h2 className='about_title'>We care of <span>Your Plant</span></h2>
        <img src={arrows} className='about_arrow' alt='arrow about' />
      </div>

      <div className='about_card'>
        <div className='about_card_box'>
          <p className='about_msg_text'>
            Somos una empresa que busca satisfacer las necesidades de nuestros clientes a través del desarrollo de soluciones integrales para la automatización de procesos industriales; garantizándoles un excelente servicio y la disponibilidad de un equipo humano altamente calificado !!!
          </p>
        </div>
      </div>

      <div className='about_img'>
        <img src={plc01} alt="plc01" className='about_img_plc1' />
        <img src={plc02} alt="plc02" className='about_img_plc2' />
      </div>

      <img src={wave_bottom} alt="wave_bottom" className='about_wave_bottom' />

    </div>
  )
}
