import React, { useContext, useEffect, useState } from 'react';
import SearchContext from '../context/SearchContext';


const DeployTable: React.FC = () => {
    const [checkedState, setCheckedState]= useState<boolean[]>([false, false, false, false]);
    const handleCheckboxChange = (rowIndex: number) => {
        const updatedState = [...checkedState];
        updatedState[rowIndex] = !updatedState[rowIndex];
        setCheckedState(updatedState);
    };

    //To GET the list of tasks
    const { tasks } = useContext(SearchContext);

    //To sort the tasks by priority and due date.
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    //For the pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 

    useEffect(() => {
        setSortField(null);
        setSortOrder("asc");
        setCurrentPage(1);
    }, [tasks]);

    const handleSort = (field: "priority" | "duedate") => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }   else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    const getPriorityValue = (priority: string) => {
        const priorityMap: { [key: string]: number } = { High: 3, Medium: 2, Low: 1};
        return priorityMap[priority] || 0;
    };

    const sortedTasks = sortField
     ? [...tasks].sort((a,b) => {
        let comparison = 0;
        if (sortField === "priority") {
            comparison = getPriorityValue(a.priority) - getPriorityValue(b.priority);
        } else if (sortField === "duedate") {
            const dateA = a.dueDate ? new Date(a.dueDate).getTime() : 0;
            const dateB = b.dueDate ? new Date(b.dueDate).getTime() : 0;
            comparison = dateA - dateB;
        }
        return sortOrder === "asc" ? comparison : -comparison;
      })
     : tasks;

     const totalPage = Math.ceil(sortedTasks.length / itemsPerPage);

     const paginatedTasks = sortedTasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

     const goToNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
     };


    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
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
                    <th onClick={() => handleSort("priority")}
                    style={{width: "20%", border: "1px solid black", padding: "10px", cursor: "pointer"}}>
                    Priority {sortField === "priority" ? (sortOrder === "asc" ? "<" : ">") : ""}
                    </th>
                    <th onClick={() => handleSort("duedate")}
                    style={{width: "10%", border: "1px solid black", padding: "10px", cursor: "pointer"}}>
                    Due Date {sortField === "duedate" ? (sortOrder === "asc" ? "<" : ">") : ""}
                    </th>
                    <th style={{width: "10%", border: "1px solid black", padding: "10px"}}>
                    Actions
                    </th>
                </tr>
            </thead>

            <tbody>
            {paginatedTasks.map((task) => (
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

        <div style={{ marginTop: "10px", textAlign: "center"}}>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Previuos
            </button>
            <span style={{ margin: "0 10px" }}>
                Page {currentPage} of {totalPage}
            </span>
            <button onClick={goToNextPage} disabled={currentPage === totalPage}>
                Next
            </button>
        </div>

        </div>

    );
};

export default DeployTable;
