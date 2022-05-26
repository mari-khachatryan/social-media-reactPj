import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main/Main';
import Auth from './components/Auth/Auth';
import Postes from './components/Postes/Postes';

const App = () => {
  return (
    <div className='container'>
         <Router>
            <Header />
            <Postes />
            <Auth />
            <Main />
            <Footer />
         </Router>
    </div>
   
  );
}

export default App;
