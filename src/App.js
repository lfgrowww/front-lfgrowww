import { Routes, Route,  Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
