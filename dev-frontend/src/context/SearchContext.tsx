import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../ui/Task';

type SearchContextType = {   //type?
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    NameSearch: string;
    PrioritySearch: string;
    FlagSearch: string
    setnameSearch: (text: string) => void;
    setprioritySearch: (PrioritySearch: string) => void;
    setflagSearch: (FlagSearch: string) => void;
};

const SearchContext = createContext<SearchContextType>({
    tasks: [],
    setTasks: () => {},
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
    const [tasks, setTasks] = useState<Task[]>([]);
    const [NameSearch, setnameSearch] = useState<string>("");
    const [PrioritySearch, setprioritySearch] = useState<string>("All");
    const [FlagSearch, setflagSearch] = useState<string>("All");

    return (
        <SearchContext.Provider value= {{ tasks, setTasks, NameSearch, PrioritySearch, FlagSearch, setnameSearch, setprioritySearch, setflagSearch}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;

