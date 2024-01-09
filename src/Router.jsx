// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import {CartProvider} from "./context/cart"
import CartPage from './pages/CartPage';
import Register from './pages/Auth/register/Register';
import Login from './pages/Auth/login/Login';
import { useAuth } from './context/auth'; 
import ForgotPassword from './pages/Auth/forgot/ForgotPassword';
import Profile from './pages/user/Profile';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/Admin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Orders from './pages/user/Orders';

const Router = () => {
  const [auth] = useAuth(); 
  return (
  <CartProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
         <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/profile" element={<Profile />} />
        </Route>
        
        <Route path='/dashboard' element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        </Route>
        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
    </BrowserRouter>
    </CartProvider>

  );
};

export default Router;
