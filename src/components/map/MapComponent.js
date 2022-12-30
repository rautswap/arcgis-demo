import React, { useRef } from 'react'
import MapLayer from './map-layer';


export default function MapComponent() {

  const MapEl = useRef(null);
  let  view;
  const mapLayer=new MapLayer({MapEl,view});
  console.log(mapLayer.map)

  return (
    <>
      <div style={{ height: '90vh', width: '100%' }} ref={MapEl}>
      </div>
    </>
  )
}
