import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Body from "./component/Body";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Certificates from "./component/Certificates";

function App() {
  // Use createHashRouter to define the routes
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "certificates",
          element: <Certificates />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* Use RouterProvider to apply the router */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
