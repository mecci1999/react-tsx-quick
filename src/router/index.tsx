import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/views/login/index';
import Home from '@/views/home/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
