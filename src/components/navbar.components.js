import React, {Component} from "react";
import Image from "../img/collection.jpg";

export default class NavbarClass extends Component {

    render(){
        return(
            <>
                    <nav className="navbar navbar-expand-lg mb-4 navbar-fixed-top" style={{background:"#323840", width: "100%"}}>
                        <img src={require("../img/ct-logo.png")}></img>
                        <br/>
                        <a className="navbar-brand" href="/" style={{color: "white", padding: "1%"}} >Track Your Collections</a>
                        <form className="form-inline ml-auto" >
                            <div className="md-form my-0">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
                            <button href="/" className="btn btn-outline-white btn-info btn-md my-o ml-sm-2">Search</button>
                        </form>
                    </nav>

                    <section id="showcase" style={{minHeight: "400px", background: `url(${Image})`, textAlign: "center"}}>
                        <div className="container">
                            <h1 style={{marginTop: "-25px", fontSize: "55px", paddingTop: "150px", fontStyle:"italic", fontWeight: "bold"}}>Save the moment</h1>
                        </div>
                    </section>
            </>
        );
    }
}