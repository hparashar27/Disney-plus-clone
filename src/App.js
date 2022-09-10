import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Componenta/Login";
import Header from "./Componenta/Header";
import Home from "./Componenta/Home";
import "./App.css";
import Detail from "./Componenta/Details";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
              <Home/>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
