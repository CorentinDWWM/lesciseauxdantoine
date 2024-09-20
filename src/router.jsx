import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil/Accueil";
import Contact from "./pages/Contact/Contact";
import Mentions_Legales from "./pages/Mentions_Legales/Mentions_Legales";

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
      {
        path: "/mentions_legales",
        element: <Mentions_Legales />,
      },
    ],
  },
]);
