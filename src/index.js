import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthTabContext from './contexts/AuthTabProvider';
import PostesProvider from './contexts/PostesProvider';
import { store } from './components/Profile/ReduxUser/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
          <BrowserRouter>
               <PostesProvider>
                    <AuthTabContext>
                         <App />
                    </AuthTabContext>
               </PostesProvider>
          </BrowserRouter>
     </Provider>
);

