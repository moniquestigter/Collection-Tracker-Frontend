import React, {Component} from "react";
import Image from "../img/collection.jpg";


export default function NavbarClass (props) {
        return(
            <>
                    <nav className="navbar navbar-expand-lg mb-4 navbar-fixed-top" style={{background:"#323840", width: "100%"}}>
                        <img src={require("../img/ct-logo.png")}></img>
                        <br/>
                        <a className="navbar-brand" style={{color: "white", padding: "1%"}} >Track Your Collections</a>
                        <form className="form-inline ml-auto" >
                            <a href="http://localhost:3000/login" style={{ color: "black", background: "white", width: "120%", fontSize: "15px"}}> Logout</a>
                        </form>
                    </nav>
                    <section id="showcase" style={{minHeight: "200px", background: `url(${Image})`, textAlign: "center"}}>
                        <div className="container">
                            <h1 style={{marginTop: "-25px", fontSize: "55px", paddingTop: "70px", fontStyle:"italic", fontWeight: "bold"}}>Save the moment</h1>
                        </div>
                    </section>
            </>
        );
}