import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ActivityContextProvider } from "./components/function.jsx";
// import css
import App from "./App.jsx";
import "./index.css";
// import components
import GetStart from "./components/GetStart/GetStart.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ActivityCard from "./components/ActivityCard/ActivityCard.jsx";
import SelectActivity from "./components/SelectActivity/SelectActivity.jsx";
import ActivityForm from "./components/SelectActivity/ActivityForm.jsx";
import Advice from "./components/Advice.jsx";
import Logout from "./components/Logout.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Chart from "./components/Chart/Chart.jsx";
import Login from "./components/Login/Login.jsx";
import Activity from "./components/ActivityCard/Activity.jsx";
// import util
// import { ActivityContextProvider } from "./components/function.jsx";
// import context
// import AuthContextProvider from "../context/AuthContext.jsx";

// for non-token or non-login
// function NonAuthProtectedRoute({ children }) {
//   const isAuthenticated = window.localStorage.getItem("token");

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// for token or login
// function AuthProtectedRoute({ children }) {
//   const isAuthenticated = window.localStorage.getItem("token");
//   if (isAuthenticated) {
//     return <Navigate to="/Home" replace />;
//   } else {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: (
          // <AuthProtectedRoute>
            <Home />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/Profile",
        element: (
          // <AuthProtectedRoute>
            <Profile />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/ActivityCard",
        element: (
          // <AuthProtectedRoute>
            <ActivityCard />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/Advice",
        element: (
          // <AuthProtectedRoute>
            <Advice />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/SelectActivity",
        element: (
          // <AuthProtectedRoute>
            <SelectActivity />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/ActivityForm",
        element: (
          // <AuthProtectedRoute>
            <ActivityForm />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/Activity",
        element: (
          // <AuthProtectedRoute>
            <Activity />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/Chart",
        element: (
          // <AuthProtectedRoute>
            <Chart />
          // </AuthProtectedRoute>
        ),
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/Getstart",
    element: <GetStart />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivityContextProvider>
      <RouterProvider router={router} />
    </ActivityContextProvider>
  </React.StrictMode>
);
