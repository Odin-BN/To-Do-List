import React, { useState } from "react";

const OptionsBox = () => {
    const [selectedOption, setSelectedOption] = useState("All, High, Medium, Low");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div style={{ padding: "0px", position: "absolute", top: "103px", left: "100px"}}>
            <select
                value={selectedOption}
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
                <option disabled value= "All, High, Medium, Low">All, High, Medium, Low</option>
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    );
};

export default OptionsBox