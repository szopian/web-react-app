import GlobalStyle from "./globalStyle";
import WelcomePage from "./pages/WelcomePage";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/work" component={Work} />
      </Switch>
      ;
    </Router>
  );
}

export default App;
