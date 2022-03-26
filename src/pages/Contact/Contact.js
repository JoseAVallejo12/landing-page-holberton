import React from 'react'
import { ContactCard } from '../../components/contact-card/ContactCard'
import './contacts.css'
import user01 from '../../assets/img/user.png'

let contact = {
  "role": "SALES MANAGER",
  "name": "César",
  "email": "cesar@autoequic.com",
  "phone": "3001234567"
}

export default function Contact() {
  return (
    <div className='contact_cards'>
      <p className='contact_cards_title'>AUTOEQUIC <span>Team</span></p>
      <div className='contact_cards_wrapper'>
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
        <ContactCard img={user01} {...contact} />
      </div>
      <div className="contact_map">
        <iframe title='google maps' className='contact_iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  )
}
