import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PostesProvider from './contexts/PostesProvider';
import { store } from './components/Profile/ReduxUser/store';
import { Provider } from 'react-redux';
import UserProvider from './contexts/UserProvider';
import AuthTabProvider from './contexts/AuthTabProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <Provider store={store}>
          <BrowserRouter>
               <AuthTabProvider>
                    <PostesProvider>
                         <UserProvider>
                              <App />
                         </UserProvider>
                    </PostesProvider>
               </AuthTabProvider>
          </BrowserRouter>
     </Provider>

);

