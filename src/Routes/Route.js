import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Yourplan from "../Yourplan/Yourplan";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/plan',
                element: <Yourplan></Yourplan>
            }
        ]
    }
])