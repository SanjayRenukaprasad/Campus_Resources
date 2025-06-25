import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/filtercategory';
import CategoryDetail from './pages/CategoryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
