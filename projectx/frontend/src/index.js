import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ProjectContextProvider } from "./context/ProjectContext";
import {ChatContextProvider} from "./context/ChatProvider";
import { ChakraProvider } from '@chakra-ui/react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
;
root.render(
 
    <AuthContextProvider>
      <ProjectContextProvider>
      <ChatContextProvider>
      <ChakraProvider>
        <App />
       </ChakraProvider>
       </ChatContextProvider>
      </ProjectContextProvider>
    </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
