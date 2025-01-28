import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";


const SearchBox: React.FC= () => {
    const { NameSearch, setnameSearch } = useContext(SearchContext) || {};

    return (
        <div style={{ padding: "0px", position: "absolute",top: "45px", left: "100px",}}>
            <input 
            type="text"
            value={NameSearch}
            onChange={(e) => setnameSearch(e.target.value)}
            placeholder="text..."
            style={{
                width: '1500px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid black',
                borderRadius: '4px',
            }}
            />
            <p>{/*Se puede ingresar una palabra afuera de las llaves para que diga antes del query*/}</p>
        </div>

    )
}

export default SearchBox