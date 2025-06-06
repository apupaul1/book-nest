import { createBrowserRouter } from "react-router";
import RootLayout from '../layouts/RootLayout'
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import BookShelf from "../pages/BookShelf/BookShelf";
import BookDetails from "../pages/BookDetails/BookDetails";
import AddBook from "../pages/AddBook/AddBook";
import MyBook from "../pages/MyBook/MyBook";
import PrivateRoutes from "../routes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'bookshelf',
                loader: () => fetch('http://localhost:3000/books'),
                Component: BookShelf
            },
            {
                path: '/books/:id',
                Component: BookDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: 'addbooks',
                element: <PrivateRoutes> <AddBook></AddBook> </PrivateRoutes>
            },
            {
                path: 'mybooks',
                element: <PrivateRoutes> <MyBook></MyBook> </PrivateRoutes>
            }
        ]
    }
])


export default router;