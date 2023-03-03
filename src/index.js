import React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import BatchingTimer from "./components/automaticBatchingTimer";
import BatchingAsync from "./components/automaticBatchingAsyncFunctions";
import BatchingEventListener from "./components/automaticBatchingEventListener";
import StrictModeComponent from "./components/strictMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/strictMode",
    element: <StrictModeComponent />,
  },
  {
    path: "/batching/async",
    element: <BatchingAsync />,
  },
  {
    path: "/batching/timer",
    element: <BatchingTimer />,
  },
  {
    path: "/batching/eventListener",
    element: <BatchingEventListener />,
  },
]);

const rootNode = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  rootNode
);
