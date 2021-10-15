import React from 'react'
import { MapComponent } from '../../Components/MapComponent'

export const Map = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
  return (
    <div>
      <MapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100vh` }} />}
      />
    </div>
  )
}
