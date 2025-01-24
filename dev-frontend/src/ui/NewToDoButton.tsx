import React, { useState } from 'react';
import ToDoModal from './ToDoModal'; 

const NewToDoButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

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
            {showModal && (<ToDoModal onClose={() => setShowModal(false)} /> 
        )}
      </>
    );
};

export default NewToDoButton;