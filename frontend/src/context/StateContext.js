import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[globalState, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
