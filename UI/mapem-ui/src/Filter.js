import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
function Filter(){
    const [zipCode, setzipCode] = useState("");
    const [address, setaddress] = useState("");
    const [selectedContaminent, setselectedContaminent] = useState("");
    
    const contaminents = ['Arsenic_Total_mg_Kg_6in','Barium_Total_mg_Kg_6in','Beryllium_Total_mg_Kg_6in','Calcium_Total_mg_Kg_6in','Cadmium_Total_mg_Kg_6in','Cobalt_Total_mg_Kg_6in','Chromium_Total_mg_Kg_6in','Copper_Total_mg_Kg_6in','Iron_Total_mg_Kg_6in']
    
    return <>
    {zipCode}
    {address}
    {selectedContaminent}
    <div className='d-flex flex-row m-5' style={{backgroundColor: 'greenyellow'}}>
        <div className='m-2 p-2 bd-highlight'>
            <Form.Label htmlFor="zipcode">Zip Code</Form.Label>
        <Form.Control
            type="text"
            id="zipcode"
            value={zipCode}
            onChange={(e) => setzipCode(e.target.value)}
        />
        </div>
        <div className='m-2 p-2 bd-highlight'>
            <Form.Label htmlFor="address">Address</Form.Label>
        <Form.Control
            type="text"
            id="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
        />
        </div>
        <div className='m-2 p-2 bd-highlight'>
         <Form.Label htmlFor="contaminent">Chemical</Form.Label>
         <Form.Select aria-label="Default select example" value={selectedContaminent}  onChange={(e) => setselectedContaminent(e.target.value)}>
            <option>Select Chemical</option>{contaminents.map(che => <option value={che}>{che}</option>  )}
        </Form.Select>  
        </div>
        <Button variant="success" className='m-4' style={{ alignSelf: 'last baseline' }}>Search</Button>
    </div>
    </>
}

export default Filter;