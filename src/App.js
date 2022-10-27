import './App.css';
<<<<<<< HEAD
import data from './data/product-data.json'
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

>>>>>>> 25d83f944b6f849d9827f86551bf0c61074ff302
// Components of MUI
import { Typography } from '@mui/material';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

// Components of Project and .js files
// import Navbar from './Components/Navbar';
// import MainContainer from './Components/MainContainer';
// import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route
    path="signIn"
    element={
    <div className="App">
<<<<<<< HEAD

        <Navbar />
        <MainContainer data={data}/>
        <Footer />

        
  


=======
     <div id="form__container">
        <SignIn />
     </div>
>>>>>>> 25d83f944b6f849d9827f86551bf0c61074ff302
    </div>
    }
    />
    </Routes>
    <Routes>
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