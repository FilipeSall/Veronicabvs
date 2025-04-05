import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useGlobalContext deve ser usado dentro de um GlobalProvider');
    }
    return context;
  };