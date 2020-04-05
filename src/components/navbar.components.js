import React, {Component} from "react";
import {Link} from "react-router-dom"
import {Navbar,Button,Form,FormControl,Nav, Container} from "react-bootstrap"

export default class NavbarClass extends Component {

    render(){
        return(
            <div>
                    <nav className="navbar navbar-expand-lg mb-4" style={{background:"#323840"}}>
                        <a className="navbar-brand" href="/" style={{color: "white"}} >Track Your Collections!</a>
                        <form className="form-inline ml-auto" >
                            <div className="md-form my-0">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
                            <button href="/" className="btn btn-outline-white btn-info btn-md my-o ml-sm-2">Search</button>
                        </form>
                    </nav>
            </div>
        );
    }
}