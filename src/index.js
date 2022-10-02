import React from "react";
import "./index.css";

import App from "./App";
import Event from "./Event";
import Create from "./Create";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "create",
        element: <Create />,
    },
    {
        path: "event",
        element: <Event />,
    },
]);
createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
