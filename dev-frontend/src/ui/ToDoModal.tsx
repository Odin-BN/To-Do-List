import React, { useState } from 'react';

interface ToDoModalProps {
    onClose: () => void;  //To close the Modal
}

const ToDoModal: React.FC<ToDoModalProps> = ({ onClose }) => {
    const [toDoName, setToDoName] = useState("");
    const [priority, setPriority] = useState("Low");
    const [deadline, setDeadline] = useState<string | null>(null);

    const handleSave = () => {
        if (toDoName.trim().length === 0){
            alert("Task name cannot be empty.");
            return;
        }
        if (toDoName.length > 120){
            alert("Task name cannot exceed 120 characters.");
            return;
        }

        const newToDo = {
            name: toDoName,
            priority,
            deadline,
        };

        console.log("New Task:", newToDo); //Para verlo en la consola de prueba

        onClose();
        setToDoName("");
        setDeadline(null);
        setPriority("Low");
    };

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>Create a New Task</h2>

                {/* Name of the task*/}
                <label>
                    Task Name (max 120 characters):
                    <input
                        type="text"
                        value={toDoName}
                        onChange={(e) => setToDoName(e.target.value)}
                        maxLength={120}
                    />
                </label>

                {/*Priority*/}
                <label>
                    Priority:
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>

                {/*Deadline*/}
                <label>
                    Deadline (optional):
                    <input 
                        type="date"
                        value={deadline || ""}
                        onChange={(e) => setDeadline(e.target.value || null)}
                    />
                </label>

                {/*Buttons for action*/}
                <div className='modal-actions'>
                    <button onClick={handleSave}>Save Task</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoModal;