import React from 'react';
import BlackBorderBox from "./ui/BlackBorderBox"
import DeployTable from "./ui/DeployTable"
import NewToDoButton from './ui/NewToDoButton';
import { SearchProvider } from './context/SearchContext';
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div style={{ padding: "20px" }}>

      <SearchProvider>

        <BlackBorderBox />{/* Renderiza el bloque principal */}
        <NewToDoButton/> {/*Renderiza el boton de agregar to do*/}
        <DeployTable /> {/*Renderiza tabla*/}
        
      </SearchProvider>

    </div>  
    
  );
}
export default App;

