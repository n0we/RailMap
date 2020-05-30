import React, { Component } from "react";
import { Map, TileLayer, withLeaflet, MapControl } from "react-leaflet";
import ReactLeafletSearch from "react-leaflet-search";
import Routing from "./RoutingMachine";
import L from "leaflet";
import MapInfo from "./MapInfo";
import Search from "./Search";

const myIcon = L.icon({
  iconUrl: "marker-icon.png",
  iconRetinaUrl: "marker-icon-2x.png",
  shadowUrl: "marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
class MapRail extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 48.04870,
      lng: 67.89550,
      zoom: 5.5,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };
  
  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];
    
    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
      <ReactLeafletSearch position="topleft" provider="OpenStreetMap" providerOptions={{ region: "kz" }} markerIcon={myIcon} />;
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution = 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url = "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
    />
        {this.state.isMapInit && <Routing map={this.map}/>}
      </Map>
    );
  }
}

export default MapRail;
