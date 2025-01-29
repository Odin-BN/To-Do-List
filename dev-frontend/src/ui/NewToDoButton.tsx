import React, { useContext, useState } from 'react';
import ToDoModal from './ToDoModal'; 
import SearchContext from '../context/SearchContext';

const NewToDoButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const {fetchTasks } = useContext(SearchContext)

    return (
        <>
            {/*The button of new to do*/}
            <button style={{ 
                padding: "0px", 
                position: "absolute", 
                top: "305px", 
                width: "140px",
                height: "40px",
                textAlign: "center",}} 
                onClick={() => setShowModal(true)}>+ New To Do</button> 

            {/*The modal after doing click*/}
            {showModal && (<ToDoModal onClose={() => {setShowModal(false); fetchTasks()}} /> 
        )}
      </>
    );
};

export default NewToDoButton;