import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

const SearchButton: React.FC = () => {
    //Se usa para acceder a los filtros
    const { fetchTasks } = useContext(SearchContext);
    

    
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
                onClick={() => fetchTasks()}>Search</button> 
        </>
    )
}

export default SearchButton;