import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components of MUI
import { Typography } from '@mui/material';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ProductCard from './Components/ProductCard';
import data from './data/product-data.json'
// Components of Project and .js files
// import Navbar from './Components/Navbar';
// import MainContainer from './Components/MainContainer';
// import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signIn"
          element={
            <div className="App">
              <div id="form__container">
                <SignIn />
              </div>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="App">
              <div id="form__container">
                <SignUp />
              </div>
            </div>
          }
        />
        <Route
          path="/card"
          element={
            <div className="App">
              <div id="form__container">
                <ProductCard data={data[0]} />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



{/* 

 -- Work to do --

 -- Navbar
 -- Main container
 -- Footer with links
 -- Contact Page
 -- About page
 -- Routing 



*/}