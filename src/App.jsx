import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold values from input field
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)

  //for conditional rendering
  const [isPrinciple,setisPrinciple] = useState(true)
  const [isRate,setisRate] = useState(true)
  const [isYear,setisYear] = useState(true)

  const validate = (e)=>{
   // setPrinciple(e.target.value)
   let value = e.target.value
   let name =e.target.name
   console.log(e.target);
   console.log(!!value.match(/^[0-9]*$/));
  

   if(!!value.match(/^[0-9]*$/)){
    if(name=='principle'){
      setPrinciple(value)
      setisPrinciple(true)
     }
     else if(name=='rate'){
      setRate(value)
      setisRate(true)
     }
     else{
      setYear(value)
      setisYear(true)
     }
   }
   else{
    if(name=='principle'){
      
      setPrinciple(value)
      setisPrinciple(false)
     }
     else if(name=='rate'){
      setRate(value)
      setisRate(false)
     }
     else{
      setYear(value)
      setisYear(false)
     }
   }
  }
  const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
    setInterest(0)
  }
  
  const calculate =()=>{
    setInterest((principle*rate*year)/100)
  }
  //console.log('Principle',principle);
  //console.log('Rate',rate);
  //console.log('Year',year);
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{width:'100',height:'100vh'}}>
        <div className='bg-light p-5 rounded' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-3'>
            <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
            <p>Total simple interest</p>
          </div>
          <form className='mt-5'>
            <div className="mb-3">
              <TextField id="outlined-basic" name='principle' value={principle ||  ""} label="₹ Principle amount" onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
              {!isPrinciple && 
              <p className='text-danger'>*Invalid input</p>}
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" name='rate'  value={rate || ""} label="Rate of Interest (p.a)%" onChange={(e)=>validate(e)} variant="outlined" className='w-100'/>
              {!isRate &&
              <p className='text-danger'>*Invalid input</p>}
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" name='year' value={year || ""} label="Year (Yr)" onChange={(e)=>validate(e)} variant="outlined"className='w-100' />
              {!isYear &&
              <p className='text-danger'>*Invalid input</p>}
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <Button variant="contained" color='success' style={{width:'190px',height:'60px'}} disabled={isPrinciple && isRate && isYear ?false:true} onClick={calculate}>Calculate</Button>
              <Button variant="outlined" style={{width:'190px',height:'60px'}} onClick={handleReset} >Reset</Button>
            </div>
          </form>
        </div>
     </div>
    </>
  )
}

export default App
