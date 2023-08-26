import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
      {index:true , element: <Home />},
      { path: "/contact", element: <Contact /> },
      {path:"/about", element: <About />},
      {path:"/education", element: <Education />},
      {path:"/skills", element: <Skills />},
      {path:"/projects", element: <Projects />},

    ] },
    
  ]);

  return <RouterProvider router={router} />
}

export default App;
