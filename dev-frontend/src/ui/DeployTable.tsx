import React, { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';


const DeployTable: React.FC = () => {
    const [checkedState, setCheckedState]= useState<boolean[]>([false, false, false, false]);
    const handleCheckboxChange = (rowIndex: number) => {
        const updatedState = [...checkedState];
        updatedState[rowIndex] = !updatedState[rowIndex];
        setCheckedState(updatedState);
    };

    const { tasks } = useContext(SearchContext);
    

    /*
    const buildSearchUrl = (NameSearch: string, PrioritySearch: string, FlagSearch: string): string => {
        let url = "/todos?";
        if (NameSearch) url += `NameSearch=${encodeURIComponent(NameSearch)}&`
        if (PrioritySearch && PrioritySearch !== "All") url += `PrioritySearch=${encodeURIComponent(PrioritySearch)}&`;
        if (FlagSearch && FlagSearch !== "All") url += `FlagSearch=${encodeURIComponent(FlagSearch)}&`;
        return url.slice(0, -1);
    };

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:9090/todos");
            if (!response.ok) {
                throw new Error("Error al obtener las tareas");
            }
            const data = await response.json();
            setTasks(data);
        }   catch (error) {
            console.error("Error al obtener las tareas:", error);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);*/

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
