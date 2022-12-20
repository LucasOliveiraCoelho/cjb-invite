import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "*",
    element: (<Home />),
  }
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
