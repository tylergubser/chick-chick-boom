import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const [currentUser, setCurrentUser] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  useEffect( ()=> {
    fetch('http://localhost:3000/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  // if(!currentUser) return <Login setCurrentUser={setCurrentUser}/>

  return (
    <div className="App">
     <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
