import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '',
                Component: Home,
            },
            {
                path: '/caterogy/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>Auth</h2>
    },
    {
        path: '/news',
        element: <h2>News</h2>
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
]);