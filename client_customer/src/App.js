import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import { MyProvider } from './contexts';

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
