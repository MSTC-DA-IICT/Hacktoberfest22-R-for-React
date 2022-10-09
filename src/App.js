import './App.css';

// Components of MUI
import { Typography } from '@mui/material';

// Components of Project and .js files
import Navbar from './Components/Navbar';
import MainContainer from './Components/MainContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App flex flex-col h-screen">

        <Navbar />
        <MainContainer />
        <Footer />

        
  


    </div>
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