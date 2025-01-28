import React from 'react';
import SearchBox from './SearchBox';
import OptionsBox from './OptionsBox';
import OptionsStates from './OptionsStates';
import SearchButton from './SearchButton';

//import NewToDoButton from './NewToDoButton';

const BlackBorderBox: React.FC = () => {
    return (
      <div
        style={{
          border: "2px solid black",
          padding: "16px",
          width: "1663px",
          height: "200px",
          textAlign: "center",
          position: "relative",
          top: "40px",
          //left: "50px",
        }}
      >
        {/* texto para el cuadro*/}
        
        <div style={{ padding: "10px", textAlign: "left"}}>
          <div style= {{ marginTop: "30px", marginBottom: "40px"}}> Name </div>
          <div style= {{ marginBottom: "40px"}}> Priority </div>
          <div> State </div>
        </div>


        <SearchBox/>
        <OptionsBox/>
        <OptionsStates/>
        <SearchButton />

      </div> //en el espacio de arriba puede ir texto
  
    );    
  };
  
  
  export default BlackBorderBox;