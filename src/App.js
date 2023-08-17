import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
      {index:true , element: <Home />},
      { path: "/contact", element: <Contact /> },
      {path:"/about", element: <About />},
      {path:"/skills", element: <Skills />}
    ] },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
