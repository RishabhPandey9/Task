import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

const Head = () => {
    const [age, setAge] = useState('');
    const [arr,setArr] = useState([])
    const [ind,setInd] = useState(1)

  const handleChange = (event) => {
    setAge(event.target.value );
   
  };
  const handleSubmit = () =>{
    if (age !== arr.slice(-1)[0] ){
        setInd(ind+1)
    }
    setArr([...arr,age])
console.log('arr.slice(-1)[0],ind,age', arr.slice(-1)[0],ind.toString(),age)
    
    setAge('')
  }
  return (
    <>
     <Navbar />
     <div className='mt-10 mx-auto container px-40'>
     <Box  >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Value"
          onChange={handleChange}
        >
          <MenuItem value={"H"}>Head</MenuItem>
          <MenuItem value={"T"}>Tail</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
  <div className='my-10'>
  <Button onClick={() => handleSubmit()} type='submit' variant="contained">Submit</Button>
  
  
  </div>
  <div className={`grid grid-cols-${'3'}`}>
  {arr.map((item) => <div className='mt-2'>{item}</div>)}
  </div>
 

     </div>
    
    </>
   
  )
}

export default Head