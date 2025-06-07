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
import Loading from "../pages/Shared/Loading";
import MyProfile from "../pages/MyProfile/MyProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading></Loading>,
                Component: Home
            },
            {
                path: 'bookshelf',
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('http://localhost:3000/books'),
                Component: BookShelf
            },
            {
                path: '/books/:id',
                hydrateFallbackElement: <Loading></Loading>,
                Component: BookDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: 'register',
                hydrateFallbackElement: <Loading></Loading>,
                Component: Register
            },
            {
                path: 'signin',
                hydrateFallbackElement: <Loading></Loading>,
                Component: SignIn
            },
            {
                path: 'addbooks',
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoutes> <AddBook></AddBook> </PrivateRoutes>
            },
            {
                path: 'mybooks',
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoutes> <MyBook></MyBook> </PrivateRoutes>
            },
            {
                path: 'myprofile',
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoutes> <MyProfile></MyProfile> </PrivateRoutes>
            }
        ]
    },
        {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])


export default router;