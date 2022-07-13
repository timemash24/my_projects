import { BrowserRouter as Router } from 'react-router-dom';
import Transition from './components/Transition';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Transition />
    </Router>
  );
}

export default App;
