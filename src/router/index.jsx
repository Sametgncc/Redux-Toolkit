import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import BlogPage from "../pages/blog-page";
import ContactPage from "../pages/contact-page";
import AboutPage from "../pages/about-page";
import HomePage from "../pages/home-page";


const router = createBrowserRouter([
    {
        path: "/",
        element : <RootLayout/>,
        children : [
            {
                index : true,
                element : <div> <HomePage/> </div>

            },
            {
                path: "about",
                element : <div> <AboutPage/> </div>
            },
            {
                path: "blog",
                element : <div> <BlogPage/> </div>
            },
            {
                path: "contact",
                element : <div> <ContactPage/> </div>
            },

        ], 
    } 
])



const AppRouter = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AppRouter
