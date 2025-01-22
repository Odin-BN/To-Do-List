import React, { useState } from "react";

const OptionsStates = () => {
    const [selectedOptionST, setSelectedOptionST] = useState("All, Done, Undone");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionST(event.target.value);
    };

    return (
        <div style={{ padding: "0px", position: "absolute", top: "160px", left: "100px"}}>
            <select
                value={selectedOptionST}
                onChange={handleChange}
                style={{
                    padding: "0px",
                    fontSize: "16px",
                    border: "1px solid black",
                    //borderRadius: "40px",
                    width: "400px",
                    height: "40px",
                }}
            >
                <option disabled value= "All, Done, Undone">All, Done, Undone</option>
                <option value="All">All</option>
                <option value="Done">Done</option>
                <option value="Undone">Undone</option>
            </select>
        </div>
    );
};

export default OptionsStates