import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  
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
     <main>
       {currentUser ? (
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
     </Switch>
       ) : (
        <Switch>
            <Route path="/signup">
              <SignUp setCurrentUser={setCurrentUser}/> 
            </Route>
            <Route path="/login">
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )} 
     </main>
    </div>
  );
}

export default App;
