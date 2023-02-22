import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/forgot-password/forgot-password";
import store from "./store/store";
import Toastr from "./components/toastr/toastr";
import App from "./pages/app/app";
import "./index.css";
import ExercisePage from './pages/exercise-page/ExercisePage'
import SharedLayout from "./pages/shared-layout/SharedLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SharedLayout />}>
            <Route index element={<App />}/>
            <Route path={"/register"} element={<Register />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/forgot-password"} element={<ForgotPassword />} />
            <Route path=':exerciseId' element={<ExercisePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toastr />
    </Provider>
  </React.StrictMode>
);
