import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
