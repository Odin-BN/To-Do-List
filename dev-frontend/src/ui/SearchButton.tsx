import React, { useState } from 'react';


const SearchButton: React.FC = () => {
    const [search, setSearch] = useState(false);


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
                onClick={() => setSearch(true)}>Search</button> 

                {/*Agregar logica para que cuando se haga click, le envien los datos para mostrar los resultados en base ese filtro*/}
        </>
    )
}

export default SearchButton;