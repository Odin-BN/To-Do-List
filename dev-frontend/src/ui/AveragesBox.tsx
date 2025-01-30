import React, { useContext } from "react";
import AverageTimeContext from '../context/AverageTimeContext'

const AveragesBox: React.FC = () => {
        //Global imports for getting the averages
        const { averages } = useContext(AverageTimeContext);

        return (
            <div style={{
                border: "2px solid black",
                //display: "flex",
                position: "absolute",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px",
                borderRadius: "10px",
                top: "910px",
                width: "97%",
                //left: "10px",
            }}>
                <div style={{ flex: 1, textAlign: "left"}}>
                    <p>Average time to finish tasks: {averages.total}</p>
                </div>

                <div style={{ flex: 2, display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <p>Average time to finish tasks by priority:</p>
                    </div>
                    <div>
                        <p>Low: {averages.low}</p>
                    </div>
                    <div>
                        <p>Medium: {averages.medium}</p>
                    </div>
                    <div>
                        <p>High: {averages.high}</p>
                    </div>
                </div>
            </div>
        );
};

export default AveragesBox;