import {createContext, useState} from "react";

export type AppContextValue = { contextDescription: string; setContextDescription: (_desc: string) => void};
export const AppContext = createContext<AppContextValue>({} as AppContextValue);
export const AppContextProvider = (props: { children: React.ReactNode }) => {
    const [contextDescription, setContextDescription] = useState("");
    return <AppContext.Provider value={{ contextDescription, setContextDescription }}>{props.children}</AppContext.Provider>;
};
