import NotFound from './Components/404NOTFOUND/NotFound';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Countries from './Components/CountriesPage/Countries';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addflag from './Components/AddFlag/Addflag';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/addflag" element={<Addflag />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
