/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

// Create the Context
const CollegesContext = createContext();

// Custom hook to access the colleges context
export const useColleges = () => useContext(CollegesContext);

// Provider to wrap the app
// eslint-disable-next-line react/prop-types
export const CollegesProvider = ({ children }) => {
  const { data, loading, error } = useFetch("api/colleges");
  const [colleges, setColleges] = useState(data);
  useEffect(() => {
    setColleges(data);
  }, [data]);

  const updateColleges = (newColleges) => {
    setColleges(newColleges);
  };

  return (
    <CollegesContext.Provider
      value={{ colleges, updateColleges, loading, error }}
    >
      {children}
    </CollegesContext.Provider>
  );
};
