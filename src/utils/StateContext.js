import { createContext, useState } from "react";
import { useEffect } from "react";
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [expand, setexpand] = useState(true);
  const [load, setload] = useState(true);
  useEffect(() => {
    const storedValue = localStorage.getItem("expand");
    if (storedValue) {
      setexpand(JSON.parse(storedValue));
    } else {
      localStorage.setItem("expand", JSON.stringify(true));
    }
  }, []);

  useEffect(() => {
    if (!load) {
      localStorage.setItem("expand", JSON.stringify(expand));
    } else {
      setload(false);
    }
  }, [expand]);

  const toggleMenu = () => {
    setexpand(!expand);
  };

  return (
    <StateContext.Provider value={{ expand, toggleMenu }}>
      {children}
    </StateContext.Provider>
  );
};
