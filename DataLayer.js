import React, { createContext, useReducer, useContext } from "react";

export const DataLayerContext = createContext(); //preparing data layer

export const DataLayer = (
  { initialState, reducer, children } //children is basically App
) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext); // this provide access to make get or make changes in data layer
