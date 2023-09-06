import { createContext, useContext, useState } from 'react';

const SelectedOptionsContext = createContext();

export function SelectedOptionsProvider({ children }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [altOptions, setaltOptions] = useState([]);
  
  return (
    <SelectedOptionsContext.Provider value={{ selectedOptions, setSelectedOptions, altOptions, setaltOptions }}>
      {children}
    </SelectedOptionsContext.Provider>
  );
}

export function useSelectedOptions() {
  return useContext(SelectedOptionsContext);
}