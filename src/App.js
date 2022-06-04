import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Messages from './components/Messages/Messages';
import Auth from './components/Auth/Auth';
import Postes from './components/Postes/Postes';
import Profile from './components/Profile/profile';
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import { useUserInfo } from './contexts/UserProvider';

// const Auth = lazy(() => import('./components/Auth/Auth'))


const App = () => {
  const { user } = useUserInfo()

  return (
      <Suspense fallback={<div>{HourglassBottomTwoToneIcon}</div>}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route path='profile' element={user ? <Profile /> : <Navigate to="/auth" />} />
              <Route path='posts' element={user ? <Postes /> : <Navigate to="/auth" />} />
              <Route path='auth' element={<Auth />} />
              <Route path='messages' element={user ? <Messages /> : <Navigate to="/auth" />} />
              <Route path='*' to={<Navigate path="posts" />} />
            </Route>
           </Routes>     
      </Suspense>
  );
}

export default App;
