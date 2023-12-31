import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/assets/css/Base.css';
import '../src/assets/css/Grid.css';
import '../src/assets/css/Main.css';
import '../src/assets/css/Responsive.css';
import '../src/assets/css/MyCart.css';
import '../src/assets/css/Order.css';
import '../src/assets/css/ProductDetail.css';
import '../src/assets/css/ChangePassword.css';
import '../src/assets/css/MyProfile.css';
import '../src/assets/css/Loading.css';
import '../src/assets/css/pagination.css';
import './language/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
