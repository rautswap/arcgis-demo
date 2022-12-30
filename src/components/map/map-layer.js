import { loadModules } from "esri-loader";
import { useEffect } from "react";

function MapLayer({MapEl,view}){
    useEffect(() => {
        loadModules(["esri/Map",
          "esri/views/MapView",
        ], {
          css: true
        }).then(([Map,
          MapView,
          ]) => {
    
         
          
    
          const map = new Map({
            basemap: "dark-gray-vector",
          });
    // eslint-disable-next-line
           view = new MapView({
            container: MapEl.current,
            center: [0, 0],
            zoom: 2,
            map: map,
           
          });
        })
      },[MapEl])
}
export default MapLayer;