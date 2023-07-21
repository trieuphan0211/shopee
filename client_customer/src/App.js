import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import { MyProvider } from './contexts';

function App() {
    return (
        <MyProvider>
            <div className="app">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        </MyProvider>
    );
}

export default App;
