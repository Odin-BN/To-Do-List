import React, { createContext, useState } from "react";

type AverageTimeType = {
    averages: {
        total: string;
        low: string;
        medium: string;
        high: string;
    };
    fetchAverages: () => void;
}

const AverageTimeContext = createContext<AverageTimeType>({
    averages: {total: "Test1", low: "Test2", medium: "Test3", high: "Test4"},
    fetchAverages: () => {},
});

export const AverageTimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [averages, setAverages] = useState({
        total: "N/A",
        low: "N/A",
        medium: "N/A",
        high: "N/A",
    });


    const fetchAverages = async () => {
        try {
            const response = await fetch("http://localhost:9090/todos/averages");
            const data = await response.json();
            setAverages(data);
        }  catch (error) {
            console.error("Error getting averages:", error);
        }
    };

    return (
        <AverageTimeContext.Provider value={{ averages, fetchAverages }}>
            {children}
        </AverageTimeContext.Provider>
    );
};

export default AverageTimeContext;