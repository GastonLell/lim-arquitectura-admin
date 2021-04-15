import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Inicio from "./pages/Inicio"; 
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;