import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import logo1 from '../../assets/img/logo03.png'

import './leafletMap.css';

function LeafletMap() {
  return (
    <MapContainer center={[10.989289, -74.798900]} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.989289, -74.798900]}>
        <Popup>
          <img src={logo1} alt='logo' width="30px" height="30px" />
          <p className='text-pupup'>
            <span style={{ fontSize: '10px' }}>AUTOEQUIC Ltda<br /></span>
            <span style={{ fontSize: '6px' }}>Automatizacion y equipos de control</span>
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap