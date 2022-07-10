import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Transition from './components/Transition';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Transition />
    </Router>
    // <Router basename={process.env.PUBLIC_URL}>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/about_me" element={<AboutMe />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
