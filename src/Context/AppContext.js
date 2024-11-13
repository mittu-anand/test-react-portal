import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  dashboard: {},
  sites: {},
  service: {},
};

const ACTIONS = {
  SET_DASHBOARD_DATA: "SET_DASHBOARD_DATA",
  SET_SITES_DATA: "SET_SITES_DATA",
  SET_SERVICE_DATA: "SET_SERVICE_DATA",
};

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DASHBOARD_DATA:
      return { ...state, dashboard: action.payload };
    case ACTIONS.SET_SITES_DATA:
      return { ...state, sites: action.payload };
    case ACTIONS.SET_SERVICE_DATA:
      return { ...state, service: action.payload };
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
