import React, { useState, useEffect, createContext } from 'react';

export interface CurrentStateModel {
  currentState: 'Information' | 'InformationCheck' | 'Payment';
}

export const CheckoutContext = createContext<CurrentStateModel | any>({ currentState: 'InformationCheck' });

export const CheckoutContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentState, setCurrentState] = useState<CurrentStateModel>({ currentState: 'InformationCheck' });

  const ChangeCurrentState = (state: CurrentStateModel) => {
    setCurrentState({ currentState: state.currentState });
  };

  return (
    <CheckoutContext.Provider
      value={{
        currentState,
        ChangeCurrentState,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
