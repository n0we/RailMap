import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import "leaflet-control-geocoder";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      /*waypoints: [
        L.latLng(42.3146962, 69.5883282),
        L.latLng(43.219842549999996, 76.91835188749678)
      ],*/
      lineOptions: {
        styles: [
          {color: 'black', opacity: 2, weight: 3},
        ]
      },
      router: new L.Routing.osrmv1,
      show: true,
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
