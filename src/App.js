import "./App.css";
import MainNavigation from "./components/MainNavigation";
import RootLayout from "./components/Root";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/product", element: <ProductPage /> },
// ]);
//=====================================
//=== Alternate way of creating routes
// const createRouteDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductPage />} />
//   </Route>
// );
// const router = createBrowserRouter(createRouteDefinition);
//==========================================
//====== To bring navigation bar on each component with explecitly place in each component
// we can wrrap in createRouteDefinition ftn

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
