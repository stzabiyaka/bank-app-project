import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

export const useModal = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(state => !state);

  return <AppContext.Provider value={{ showModal, toggle }}>{children}</AppContext.Provider>;
};
