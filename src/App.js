import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
