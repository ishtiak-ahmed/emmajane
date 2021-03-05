import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './Components/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <h1>Review Cart</h1>
            <Shop></Shop>
          </Route>
          <Route path="/manage">
            <h1>Manage Inventory</h1>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <h1>Page not found, 404 error</h1>
            <h2>Try something else or go to <Link to="/">Home</Link></h2>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
