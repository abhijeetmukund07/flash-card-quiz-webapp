import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import CardCarousel from "./components/card carousel/CardCarousel";
import HomePage from "./pages/home page/HomePage";
import QuizPage from "./pages/home page/QuizPage/QuizPage";
import AdminLoginForm from "./pages/admin login page/AdminLoginForm";
import AdminPage from "./pages/admin page/AdminPage";
import AddCard from "./pages/add cards/AddCard";
import AdminEditOrDeleteCards from "./pages/admin edit or delete cards/AdminEditOrDeleteCards";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/:category",
          element: <QuizPage />,
        },
        {
          path: "admin-login",
          element: <AdminLoginForm />,
        },
        {
          path: "admin",
          element: <AdminPage />,
          children:[
            {
              path:'add',
              element:<AddCard/>
            },
            {
              path: 'manage-cards',
              element: <AdminEditOrDeleteCards/>
            }
          ]
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
