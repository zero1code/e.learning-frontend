import React, {createContext, useState, useContext} from 'react';

interface ContextProps {
  showAlert: boolean;
  showOrHideAlert(): Promise<void>;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const ContextProvider: React.FC = ({children}) => {
  const [alertVisible, setAlertVisible] = useState(false);
  function showOrHideAlert() {
    setAlertVisible(!alertVisible);
    console.log(alertVisible);
  }
  return (
    <Context.Provider value={{showOrHideAlert, showAlert: alertVisible}}>
      {children}
    </Context.Provider>
  );
};

export function myUseContext() {
  const context = useContext(Context);

  return context;
}
