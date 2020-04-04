import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {AuthContext} from "./context/auth";

import Navbar from "./components/navbar.components.js";
import CreateCollection from "./components/create-collection.component.js";
import ListCollections from "./components/list-collections.components.js";
import ListItems from "./components/list-items.components.js";
import CreateItem from "./components/create-item.component.js"
import PrivateRoute from "./components/private-route.component.js";
import Home from "./components/home.components.js";
import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";

function App() {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(tokens);
  const setTokens = (data) => {
    console.log(data);
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  //{authTokens, setAuthTokens: setTokens}
  return (
    <AuthContext.Provider value={true}>
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={ListCollections} />
        <Route path="/:id/items" exact component={ListItems}/>
        <Route path="/:id/items/create" exact component={CreateItem}/>
        <Route path="/login" exact component= {Login} />
        <Route path="/signup" exact component= {SignUp} />

        <Route path="/create" exact component = {CreateCollection}/>
        
      </Router>
    </AuthContext.Provider>
    
  );
}

export default App;
