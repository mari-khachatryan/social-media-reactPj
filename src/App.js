import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Main from './Main/Main';
import Auth from './components/Auth/Auth';
import Postes from './components/Postes/Postes';
import Profile from './components/Profile/profile';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.userName)

  return (
    <div className='container'>
      <Header />
      <Routes>
        {user && <Route path='profile' element={<Profile />} />}
        <Route path='posts' element={<Postes />} />
        <Route path='auth' element={<Auth />} />
        <Route path='main' element={<Main />} />
        <Route path='*' to={<Navigate path="posts" />} />
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
