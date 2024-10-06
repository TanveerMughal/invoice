import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InvoicePage from "./components/InvoicePage";
import Home from "./components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newInvoice",
    element: <InvoicePage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
