import React from "react";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/projects",
                    element:<Project/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }
            ]
        }
    ])
  return <RouterProvider router={routes}></RouterProvider>
};



export default App;