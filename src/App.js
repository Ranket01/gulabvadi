import React from "react";
import HomePage from "./Component/Homepage/HomePage";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Component/Homepage/AuthContext";


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
