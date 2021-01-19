import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './pages/Menu';
import Orderan from './pages/Orderan';
import Profile from './pages/Profile';
import History from './pages/History';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/menu' component={Menu} />
          <Route path='/orderan' component={Orderan} />
          <Route path='/history' component={History} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
