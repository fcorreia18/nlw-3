import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import mapMarker from '../assets/images/map-marker.svg'
import '../assets/styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
    return (

        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Luanda</strong>
                    <span>Camama</span>
                </footer>
            </aside>

            <Map
                center={[8.9180682, 13.2651651]}
                zoom={10}
                style={{ width: '100%', height: '100%' }} >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>

    );
}

export default OrphanagesMap;
