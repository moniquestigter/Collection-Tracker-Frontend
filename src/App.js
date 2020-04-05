import React, {useContext} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {AuthContext} from "./context/auth";

import NavbarClass from "./components/navbar.components.js";
import CreateCollection from "./components/create-collection.component.js";
import ListCollections from "./components/list-collections.components.js";
import ListItems from "./components/list-items.components.js";
import CreateItem from "./components/create-item.component.js"

function App() {
  
  const {isLoading, user, loginWithRedirect, logout} = useContext(AuthContext);

  return (
      <Router>
        <NavbarClass />
        <br/>
          <div style={{paddingLeft: "6%"}}>
        <Route path="/" exact component={ListCollections} />
        <Route path="/:id/items" exact component={ListItems}/>
        <Route path="/:id/items/create" exact component={CreateItem}/>
        <Route path="/create" exact component = {CreateCollection}/>
        </div>
        
        
        
        
        
        
        
      </Router>
    
  );
}

export default App;
