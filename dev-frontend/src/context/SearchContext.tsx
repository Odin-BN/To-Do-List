import React, { createContext, useState, ReactNode } from 'react';

type SearchContextType = {   //type?
    NameSearch: string;
    PrioritySearch: string;
    FlagSearch: string
    setnameSearch: (text: string) => void;
    setprioritySearch: (PrioritySearch: string) => void;
    setflagSearch: (FlagSearch: string) => void;
};

const SearchContext = createContext<SearchContextType>({
    NameSearch: "",
    PrioritySearch: "All",
    FlagSearch: "All",
    setnameSearch: () => {},
    setprioritySearch: () => {},
    setflagSearch: () => {},
});

type SearchProviderProps = {
    children: ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [NameSearch, setnameSearch] = useState<string>("");
    const [PrioritySearch, setprioritySearch] = useState<string>("All");
    const [FlagSearch, setflagSearch] = useState<string>("All");

    return (
        <SearchContext.Provider value= {{ NameSearch, PrioritySearch, FlagSearch, setnameSearch, setprioritySearch, setflagSearch}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
