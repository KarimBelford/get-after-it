import * as React from 'react';
import { Box } from '@mui/material';
import {Routes, Route,useLocation} from 'react-router-dom';
import SignInNavbar from './components/SignInNavbar';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  return (
  <Box width={'400px'} sx={{width:{xl: '1488px'}}} m={'auto'}>
    
    {(location.pathname === '/')||(location.pathname === '/register') ? <SignInNavbar /> : <Navbar />}
    <Routes>
        <Route path="/" element= {<SignIn />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/exercise/:id" element= {<ExerciseDetails />} />
    </Routes>
    
    <Footer />  
  </Box>
  );
};

export default App;
