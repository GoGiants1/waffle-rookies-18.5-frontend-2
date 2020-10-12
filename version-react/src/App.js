import React, {  useRef, useState } from 'react';


import './App.css';
import Main from './Components/Main'
import { ListProvider } from './Context/List';


function App() {
    
    

  return (
    <ListProvider>
      <Main/>
    </ListProvider>
    
  );
  
}

export default App;
