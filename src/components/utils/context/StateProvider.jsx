import React, { createContext, useContext, useReducer } from 'react';


// PREP DATA LAYER
export const StateContext = createContext();

// WRAP APPLICATION AND PROVIDE DATA LAYER
export const StateProvider  = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// PULL INFO FROM DATA LAYER
export const useStateValue = () => useContext(StateContext);
