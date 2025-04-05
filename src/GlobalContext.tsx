import { createContext } from "react";
import { GlobalContextInterface, GlobalProviderProps } from "./interfaces/states";

export const GlobalContext = createContext<GlobalContextInterface | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

    const value = {

    };

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider; 