import React, { useEffect, useState } from 'react';
import { Task } from './Task';

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

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetch("http://localhost:9090/todos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener las tareas");
                }
                return response.json();
            })
            .then((data: Task[]) => setTasks(data))
            .catch((error) => console.error(error));
    }, []);

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
            {tasks.map((task) => (
                <tr key={task.id} style={{backgroundColor: task.rowColor}}>
                    <td
                    style={{border:"1px solid black", padding: "10px", textAlign: "center"}}>
                        <input 
                        type= "checkbox"
                        checked={checkedState[task.id]}
                        onChange={() => handleCheckboxChange(task.id)}
                        />
                    </td>
                    <td style={{border:"1px solid black", padding: "10px"}}>{task.name}</td>
                    <td style={{border:"1px solid black", padding: "10px"}}>{task.priority}</td>
                    <td style={{border:"1px solid black", padding: "10px"}}>{task.dueDate}</td>
                    <td style={{border:"1px solid black", padding: "10px"}}>Edit/Remove {task.id}</td>
                </tr>
            ))}
            </tbody>
      </table>
    );
};

export default DeployTable;
