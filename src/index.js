import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./Context/AppContext";
import { AuthProvider } from "./Context/AuthContext";
import { theme } from "./Themes/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);
