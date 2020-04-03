import React, {Component} from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to="/" className="navbar-brand">Track Your Collections!</Link>
                <div className="collapse navbar-collapse">
                </div>
            </nav>
        );
    }
}