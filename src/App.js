import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="todo-app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
