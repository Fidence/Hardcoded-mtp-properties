import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageRender from './PageRender';




function App() {
  return (
    <div className="main__container">
      

      <Router>
    
        <Routes>
          <Route path="/" element={<PageRender />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:slug" element={<PageRender />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
