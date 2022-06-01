
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom"
import { Home } from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
