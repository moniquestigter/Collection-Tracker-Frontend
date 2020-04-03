import React from "react";
import {Link} from "react-router-dom";

import Navbar from "./navbar.components.js";

export default function Login () {
    return(
        <div>
            <Navbar />
            <form>
                <div className="form-group">
                    <input type="email" required className="form-control" placeholder="Email"></input>
                </div>

                <div className="form-group">
                    <input type="password" required className="form-control" placeholder="Password"></input>
                </div>

                <div className="form-group">
                    <input type="submit" value="Sign In" className="btn btn-primary"></input>
                </div>

                <Link to="/signup">Don't have an account yet?</Link>
            </form>
        </div>
    );

}