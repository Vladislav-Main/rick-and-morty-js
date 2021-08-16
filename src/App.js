import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './navbar/NavBar';
import { Routes } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
