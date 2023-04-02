import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './route/PrivateRoute';


/* Plan (making h&m website)
 1. Products page, login, product detail page
 2. Navigation bar: show nav bar in all pages 
 3. Product page: Show all list of product
 4. Login page: go to login page when the login button is clicked
                and when the product detail is clicked but the user did not login yet.
                Simple login func:if flase => not login, else=> login
 5. Product detail page: show the product detail when the user did login.
                         if the user click the logout in the product detail page, 
                         the user status will be logout and the page will be redirected to login page.        
 6. login-logout button: if the user did login, show the logout button.
                         if the user did logout, show the login button
 7. product search: the user can search product in search bar. */


function App() {
  // Simple login func:if flase => not login, else=> login
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(() => {
    console.log(authenticate)
  }, [[authenticate]])



  return (
    <div className="App">
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} authenticate={authenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />

      </Routes>

    </div>
  );
}

export default App;