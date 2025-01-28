import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

const SearchButton: React.FC = () => {
    //Se usa para acceder a los filtros
    const { setTasks, NameSearch, PrioritySearch, FlagSearch } = useContext(SearchContext);
    

    const handleSearch = async () => {
        let searchUrl = "http://localhost:9090/todos?" //PrioritySearch=Medium

        if (NameSearch) {
            searchUrl += `NameSearch=${encodeURIComponent(NameSearch)}&`;
        }
        if (PrioritySearch && PrioritySearch !== "All") {
            searchUrl += `PrioritySearch=${encodeURIComponent(PrioritySearch)}&`;
        }
        if (FlagSearch && FlagSearch !== "All"){
            searchUrl += `FlagSearch=${encodeURIComponent(FlagSearch)}`;
        }

        searchUrl = searchUrl.replace(/&$/, "");

        try {
            const response = await fetch(searchUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener las tareas");
            }

            const data = await response.json();
            console.log("Datos obtenidos:", data);
            setTasks(data);
        }   catch (error) {
            console.error("Error en la busqeuda:", error);
        }

    };
    return (
        <>
            <button style={{
                padding: "0px", 
                position: "absolute", 
                top: "135px", 
                right: "75px",
                width: "180px",
                height: "50px",
                textAlign: "center",}} 
                onClick={handleSearch}>Search</button> 
        </>
    )
}

export default SearchButton;