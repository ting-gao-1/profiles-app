import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  Container  from  'react-bootstrap/Container' ; 
import  Alert  from  'react-bootstrap/Alert' ;

export  default  function  App ( )  { 
  return  ( 
    < Container  className = "py-5" > 
      < Alert  variant = "primary"  className = "text-center mb-0" >
        你好 React
      </ Alert > 
    </ Container > 
  ) ; 
}

export default App
