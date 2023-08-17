import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
      {index:true , element: <Home />},
      { path: "/contact", element: <Contact /> },
      {path:"/about", element: <About />}
    ] },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
