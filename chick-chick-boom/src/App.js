import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import NewsFeed from './components/NewsFeed.js';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const [currentUser, setCurrentUser] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  // useEffect(() => {
  //   if (isAuthenticated) {

  //   fetch(`http://localhost:3000/users?username=${user.nickname}`)
  //   .then(resp => resp.json())
  //   .then(person => console.log(person))
  //   }
  // },[user])
  
  useEffect(() => {
    if (isAuthenticated) {

    fetch("http://localhost:3000/users",
    {
      method: "POST",
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({username:user.nickname})
    })
    .then(resp => resp.json())
    .then(person => console.log(person))
    }
  },[user]) 

  

  return (
    <div className="App">
     <Navbar currentUser={currentUser} isAuthenticated={isAuthenticated}/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/News-feed">
        <NewsFeed/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
