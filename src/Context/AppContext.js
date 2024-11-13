import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  sites: [],
  monitoring: [],
  selectedSite: {},
};

const ACTIONS = {
  SET_SITES: "SET_SITES",
  SET_MONITORING: "SET_MONITORING",
  SET_SELECTED_SITE: "SET_SELECTED_SITE",
};

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SITES:
      return { ...state, sites: action.payload };
    case ACTIONS.SET_MONITORING:
      return { ...state, monitoring: action.payload };
    case ACTIONS.SET_SELECTED_SITE:
      return { ...state, selectedSite: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
