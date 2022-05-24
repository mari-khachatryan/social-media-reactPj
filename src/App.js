import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main/Main';

const App = () => {
  return (
    <Router>
      <Header />
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
