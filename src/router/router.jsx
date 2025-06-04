import { createBrowserRouter } from "react-router";
import RootLayout from '../layouts/RootLayout'
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import BookShelf from "../pages/BookShelf/BookShelf";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index:true,
                Component: Home
            },
            {
                path: 'bookshelf',
                Component: BookShelf
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signin',
                Component: SignIn
            }
        ]
    }
])


export default router;