import React, { useState } from 'react'
import Cards from './Cards'
import Film from './Film'



const App = () => {
  
  const data = Film;
    console.log("data",data);
   
  return (
    <>
   <Cards />
  
    </>

  )
}

export default App