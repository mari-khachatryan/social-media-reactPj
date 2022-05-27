import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthTabContext from './contexts/AuthTabProvider';
import PostesProvider from './contexts/PostesProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      
   <BrowserRouter>
           <PostesProvider>
                <AuthTabContext>
                     <App />
                </AuthTabContext>
           </PostesProvider>
   </BrowserRouter>
        
);

