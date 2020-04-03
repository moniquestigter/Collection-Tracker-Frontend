import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Home extends Component{
    render(){
        return(
            <div>
                <h3>Track Your Collections!</h3>
                <Link to="/create" className="btn btn-primary">+ New Collection</Link>
            </div>
        );
    }
}

// <Link to="/login" className="btn btn-primary">Login</Link>
//<Link to="/signup" className="btn btn-primary">Sign Up</Link>