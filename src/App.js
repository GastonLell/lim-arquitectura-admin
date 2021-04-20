import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {AuthProvider} from "./firebase/auth";
import {MensajesProvider} from "./firebase/dbMensajes";

import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import Inicio from "./pages/Inicio"; 
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Mensajeria from "./pages/Mensajeria";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <MensajesProvider>
      <Router>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/inbox" component={Mensajeria} />
      </Router>
      </MensajesProvider>

      </AuthProvider>
    </div>
  );
}

export default App;