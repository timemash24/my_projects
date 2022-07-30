import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from '../routes/AboutMe';
import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';

function Transition() {
  let location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about_me" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Transition;
