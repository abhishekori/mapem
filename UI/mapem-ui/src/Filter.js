import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Select from "react-dropdown-select";
import { mockData } from './mockData';

function FilterComponent(props) {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const contaminants = [{name: 'Silver',checked: false},{name: 'Aluminum', checked: false},{name: 'Arsenic', checked: false}, 
  {name:'Barium', checked: false}, {name: 'Beryllium', checked: false}, 
  {name:'Calcium', checked: false}];
  const [selectedContaminant, setSelectedContaminant] = useState(contaminants);
  
  const [response, setResponse] = useState([]);
  const handleOnChecked = (event) =>{
    const newselectedContaminant = [...selectedContaminant];
    
    newselectedContaminant.forEach(contaminant => {

      if(contaminant.name === event.target.value){
        contaminant.checked = event.target.checked;
      }
  
  })
  setSelectedContaminant(newselectedContaminant);
  }
  const handleSearch =  () => {
    console.log(zipCode, address, selectedContaminant);
    props.onSearch(zipCode, address, selectedContaminant)
  }
  return (
    <div className='d-flex flex-row m-5' style={{backgroundColor: 'greenyellow'}}>
      <Form.Group className='m-2 p-2 bd-highlight'>
        <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
        <Form.Control
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='m-2 p-2 bd-highlight'>
        <Form.Label htmlFor="address">Address</Form.Label>
        <Form.Control
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='m-2 p-2 bd-highlight'>
        <Form.Label htmlFor="contaminant">Contaminant</Form.Label>
        <div className='d-flex flex-row'>
        {selectedContaminant.map((contaminant) => (
          <div style={{marginRight: '10px'}} key={contaminant.name}>
           <Form.Check // prettier-ignore
            type={'checkbox'}
            value={contaminant.name}
            key={contaminant.name}
            id={`${contaminant.name}`}
            label={`${contaminant.name}`}
            onChange={handleOnChecked}
          />
          </div>
        ))}
        
        </div>
        
      </Form.Group>
      <Button variant="success" className='m-4' style={{ alignSelf: 'flex-end' }} 
        onClick={handleSearch}>Search</Button>
    </div>
  );

}

export default FilterComponent;
