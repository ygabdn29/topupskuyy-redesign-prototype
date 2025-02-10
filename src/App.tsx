import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Index from "./layouts/index/Index";
import LandingPage from "./pages/landingPage/LandingPage";
import OrderPage from "./pages/orderPage/OrderPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index></Index>}>
      <Route index element={<LandingPage></LandingPage>}></Route>
      <Route path="order" element={<OrderPage></OrderPage>}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="max-w-screen w-full max-h-full h-fit bg-[#232b40]">
      <div className="flex flex-col w-full">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
