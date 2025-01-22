import React, { useState } from 'react';

interface TableProps {
    //Propiedades de la tabla para mandarle datos
}


const DeployTable: React.FC<TableProps> = () => {
    const [checkedState, setCheckedState]= useState<boolean[]>([false, false, false, false]);
    const handleCheckboxChange = (rowIndex: number) => {
        const updatedState = [...checkedState];
        updatedState[rowIndex] = !updatedState[rowIndex];
        setCheckedState(updatedState);
    };

    return (
        <table
        style={{
          width: "97%",
          borderCollapse: "collapse",
          position: "relative",
          top: "100px",
          //left: "50px",
          border: "1px solid black",
        }}
        >
            <thead>
                <tr style={{backgroundColor: "rgb(204, 204, 204)"}}>
                    <th style={{width: "5%", border: "1px solid black", padding: "10px"}}>
              
                    </th>
                    <th style={{width: "20%", border: "1px solid black", padding: "10px"}}>
                    Name
                    </th>
                    <th style={{width: "20%", border: "1px solid black", padding: "10px"}}>
                    Priority 
                    </th>
                    <th style={{width: "10%", border: "1px solid black", padding: "10px"}}>
                    Due Date
                    </th>
                    <th style={{width: "10%", border: "1px solid black", padding: "10px"}}>
                    Actions
                    </th>
                </tr>
            </thead>

            <tbody>
            {Array.from({length:3}).map((_, rowIndex) => (
                <tr key={rowIndex}>
                    <td
                    style={{border:"1px solid black", padding: "10px", textAlign: "center"}}>
                        <input 
                        type= "checkbox"
                        checked={checkedState[rowIndex]}
                        onChange={() => handleCheckboxChange(rowIndex)}
                        />
                    </td>
                    <td style={{border:"1px solid black", padding: "10px"}}>Task {rowIndex+1}</td>
                    <td style={{border:"1px solid black", padding: "10px"}}>Low </td>
                    <td style={{border:"1px solid black", padding: "10px"}}>2022/02/02</td>
                    <td style={{border:"1px solid black", padding: "10px"}}>Edit/Delete</td>
                </tr>
            ))}
            </tbody>
      </table>
    );
};

export default DeployTable;
