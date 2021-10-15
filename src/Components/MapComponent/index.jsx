import React from 'react';
import { GoogleMap } from 'react-google-maps'
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

export const MapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: 48.856614, lng: 2.3522219 }}
>
</GoogleMap>
))
