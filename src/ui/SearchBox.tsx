import React, { useState } from "react";

const SearchBox = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div style={{ padding: "0px", position: "absolute",top: "45px", left: "100px",}}>
            <input 
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="text..."
            style={{
                width: '1500px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid black',
                borderRadius: '4px',
            }}
            />
            <p>{/*Se puede ingresar una palabra afuera de las llaves para que diga antes del query*/ query}</p>
        </div>

    )
}

export default SearchBox