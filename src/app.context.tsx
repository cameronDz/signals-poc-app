import {createContext, useState} from "react";

type AppContextValue = { contextDescription: string; setContextDescription: (_desc: string) => void};
const AppContext = createContext<AppContextValue>({} as AppContextValue);
const AppContextProvider = (props: { children: React.ReactNode }) => {
    const [contextDescription, setContextDescription] = useState("");
    return <AppContext.Provider value={{ contextDescription, setContextDescription }}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
