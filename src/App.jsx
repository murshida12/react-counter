
import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function App() {
  const [Counter,setcounter] =useState(0);
  const increment = () => {
    setcounter(Counter + 1);
  };

    const decrement = () => {
      

      setcounter(Counter -1);
      if(Counter<1)
      setcounter(Counter)
  };
  return (

    <div>
      
     <Container className="mt-5 pt-5' text-center">
      <h1 className="text-center">Counter app</h1>
      

      <div className="border border-primary p-5 m-5 d-inline-block">
        <h1 style={{ padding:"auto"}}>{Counter}</h1>
        <div className="d-flex justify-content-between">
        <Button className="mx-2 px-5" variant="success" onClick={increment}>+</Button>
        {Counter>0 &&
        <Button className="mx-2 px-5" variant="danger" onClick={decrement}>-</Button>
}


        
        </div>
        </div>
      </Container>
      </div>
  )
}
