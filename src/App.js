import React, {useContext} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./components/signup.component.js";
import Login from "./components/login.component.js";
import NavbarClass from "./components/navbar.components.js";
import CreateCollection from "./components/create-collection.component.js";
import ListCollections from "./components/list-collections.components.js";
import ListItems from "./components/list-items.components.js";
import CreateItem from "./components/create-item.component.js"


function App () {
  return (
    <Router>
      <NavbarClass />
      <br/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={SignUp}/>
       <div style={{paddingLeft: "6%"}}>
      <Route path="/:id" exact component={ListCollections} />
      <Route path="/:id/create" exact component = {CreateCollection}/>
      <Route path="/:id/:id/items" exact={true} component={ListItems}/>
      <Route path="/:id/:id/items/create" exact={true} component={CreateItem}/>
      </div>
      
    </Router>
  );
}
    /*
    
    
    */


export default App;
