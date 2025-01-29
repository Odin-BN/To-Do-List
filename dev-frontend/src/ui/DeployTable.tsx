import React, { useContext, useEffect, useState } from 'react';
import SearchContext from '../context/SearchContext';
import { Task } from './Task';


const DeployTable: React.FC = () => {
    const [checkedState, setCheckedState]= useState<boolean[]>([false, false, false, false]);
    const handleCheckboxChange = (rowIndex: number) => {
        const updatedState = [...checkedState];
        updatedState[rowIndex] = !updatedState[rowIndex];
        setCheckedState(updatedState);
    };

    //Global imports of tasks and functions
    const { fetchTasks } = useContext(SearchContext);
    const { tasks } = useContext(SearchContext) ?? { tasks: []};

    //To sort the tasks by priority and due date.
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    //For the Edit and Remove button
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editedTask, setEditedTask] = useState({name: "", priority: "", dueDate: ""})

    //Modal for Editing
    const handleEditClick = (task: Task | any) => {
        setSelectedTask(task);
        setEditedTask({ name: task.name, priority: task.priority, dueDate: task.dueDate || ""});
        setIsEditModalOpen(true);
    };

    //Modal for removing a task
    const handleRemoveClick = (task: Task | any) => {
        setSelectedTask(task);
        setIsDeleteModalOpen(true);
    };

    //Functinon of PUT to update task
    const UpdateTasks = async () => {
        if (!selectedTask) return;
        try {
            await fetch(`http://localhost:9090/${selectedTask.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(editedTask),
            });
            fetchTasks();
            setIsEditModalOpen(false);
        }  catch (error) {
            console.error("Error updating task: ", error);
        }
    };

    //Function of DELETE to delete a task
    const DeleteTasks = async () => {
        if(!selectedTask) return;
        try {
            await fetch(`http://localhost:9090/todos/${selectedTask.id}`, {method: "DELETE"});
            fetchTasks();
            setIsDeleteModalOpen(false);
        }  catch (error) {
            console.error("Error deleting task: ", error);
        }
    };

    //For the pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
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

    const sortedTasks: Task[] = (sortField
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
     : tasks) as Task[];

     const totalPage = Math.ceil(sortedTasks.length / itemsPerPage);

     const paginatedTasks = (sortedTasks as Task[]).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
            {(paginatedTasks as Task[]).map((task: Task) => (
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
                    <td style={{border:"1px solid black", padding: "10px"}}>
                        <button onClick={() => handleEditClick(task)}>Edit/</button>
                        <button onClick={() => handleRemoveClick(task)}>Remove</button> 
                    </td>
                </tr>
            ))}
            </tbody>
        </table>


        {/* Design of the modal for editing a task */}
        {isEditModalOpen && (
            <div style={{position: "fixed"}}>
                <div style={{}}>
                    <h2>Edit Task</h2>
                    <input
                        type="text"
                        value={editedTask.name}
                        onChange={(e) => setEditedTask({...editedTask, name: e.target.value})}
                        placeholder= "Name"
                    />
                    <select
                        value={editedTask.priority}
                        onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <input
                        type="data"
                        value={editedTask.dueDate}
                        onChange={(e) => setEditedTask({...editedTask, dueDate: e.target.value})}
                    />
                    <div>
                        <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                        <button onClick={UpdateTasks}>Save</button>
                    </div>
                </div>
            </div>
        )}


        {/* Design of the modal of confirmation for removing a task */}
        {isDeleteModalOpen && (
            <div style={{position: "fixed"}}>
                <div style={{}}>
                    <h2>Are you sure you want to delete this task?</h2>
                    <p>{selectedTask?.name}</p>
                    <div style={{}}>
                        <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
                        <button onClick={DeleteTasks}>Delete</button>
                    </div>
                </div>
            </div>
        )}


        {/*Pagination element */}
        <div style={{ top: "880px", left: "800px", textAlign: "center", position: "absolute"}}>
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
