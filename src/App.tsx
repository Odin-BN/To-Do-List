import React from 'react';
import BlackBorderBox from "./ui/BlackBorderBox"
import DeployTable from "./ui/DeployTable"
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div style={{ padding: "20px" }}>

      
      <BlackBorderBox />{/* Renderiza el bloque principal */}
      <DeployTable /> {/*Renderiza tabla*/}
      

    </div>  
    
  );
}
export default App;

