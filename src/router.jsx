import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil/Accueil";
import Contact from "./pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
