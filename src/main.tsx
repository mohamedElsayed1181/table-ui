import React from "react";
import ReactDOM from "react-dom/client";
import "./css/shadcn.css";
import { App } from "./App";
import { Toaster, TooltipProvider } from "./components/ui";
import { store } from "./context/redux";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <TooltipProvider>
                <App />
                <Toaster />
            </TooltipProvider>
        </Provider>
    </React.StrictMode>,
);
