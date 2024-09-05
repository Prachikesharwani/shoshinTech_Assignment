import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/'  element={<Dashboard/>}/>
      </Route>
      </Routes>
    </Router>
   
  );
}

export default App;
