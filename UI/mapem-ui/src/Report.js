import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { mockData } from './mockData';
import Button from'react-bootstrap/Button';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export default function Report(props) {
    const {data = [], zipCode: propZipCode = '14221', address = '', selectedContaminant = []} = props;
   console.log(propZipCode, address, selectedContaminant);
    const [zipcode, setZipcode] = useState(propZipCode); // State to store the zip code
    const [coordinates, setCoordinates] = useState(null); // State to store the coordinates
    const [lat, setLat] = useState(42.880230); // State to store the
    const [lon, setLon] = useState(-78.878738); // State to store the
    // Function to fetch coordinates based on zip code
  const fetchCoordinates = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?country=USA&postalcode=${zipcode}&format=json`);
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
      } else {
        console.error('No coordinates found for the provided zip code.');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

   // Fetch coordinates when the zip code changes
   useEffect(() => {
    if (zipcode) {
      fetchCoordinates();
    }
  }, [zipcode]);
   
  return (
    <div className='container'>
      <h2>Report</h2>
      <div id="map"></div>
      <div id="esri-map-container"></div>
      <Button onClick={() => window.print()}>Download PDF</Button>
      
      <div>
        <MapContainer center={[lat,  lon]} zoom={10} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {coordinates && (
            <Marker position={coordinates}>
              <Popup>
                ZIP code: {zipcode}
              </Popup>
            </Marker>
          )}
        </MapContainer>
    </div>

       <Table striped bordered hover>
        
      <thead>
        <tr>


          <th>Category</th>
          <th>Chemical Constituent</th>
          <th>Units</th>
          <th>Soil Cleanup Objectives</th>
          <th>Raw Data</th>
          <th>Factor</th>
          <th>Qualitative Interpretation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          let selectedContaminantsName = selectedContaminant.filter((contaminant) => contaminant.checked);
          selectedContaminantsName = selectedContaminantsName.map((contaminant) => contaminant.name);
          if(selectedContaminantsName.includes(row.chemical)){
            return ( <tr key={row.chemical}>
              <td>{row.category}</td>
              <td>{row.chemical}</td>
              <td>{row.units}</td>
              <td>{row.soil_cleanup_objectives}</td>
              <td>{row.raw_data}</td>
              <td>{row.factor}</td>
              <td>{row.qualitative_interpretation}</td>
              </tr>)
          }
         
})}
      </tbody>
    </Table>
  
    </div>
  );
}

