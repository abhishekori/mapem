import logo from './logo.svg';
import './App.css';
import MAPEMNavbar from './Navbar.js'
import FilterComponent from './Filter.js'
import Report from './Report.js';
import {mockData} from './mockData.js'
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [searching, setSearching] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [selectedContaminant, setSelectedContaminant] = useState([]);
  const handleSearch = (zipCode, address, selectedContaminant) => {
    setZipCode(zipCode);
    setAddress(address);
    setSelectedContaminant(selectedContaminant);
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 2000);
  }

  return (
    <div className="App">
      <MAPEMNavbar />
      <FilterComponent onSearch={handleSearch} />
      {searching && (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )}
      {!searching && <Report zipCode={zipCode} address={address} selectedContaminant={selectedContaminant} data={mockData} />}
    </div>
  );
}

export default App;