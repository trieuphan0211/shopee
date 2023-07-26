import './App.css';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import Router from './routers/Router';
import { MyProvider } from './contexts';
import { useEffect } from 'react';

function App() {
    return (
        <div className="app">
            <MyProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </MyProvider>
        </div>
    );
}

export default App;
