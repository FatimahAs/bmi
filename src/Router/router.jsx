import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";
import Bmi from '../pages/Bmi'
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    { path: "/", element: <Home /> },
	  { path: "bmi", element: <Bmi /> },
	  { path: "signin", element: <Signin /> },
	  {path: "signup", element: <Signup/>}
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;