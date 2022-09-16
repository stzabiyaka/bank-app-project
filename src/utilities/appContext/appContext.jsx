import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

export const useModal = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const show = () => setShowModal(true);

  const hide = () => setShowModal(false);

  return <AppContext.Provider value={{ showModal, show, hide }}>{children}</AppContext.Provider>;
};
