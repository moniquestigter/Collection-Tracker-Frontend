import React, {Component} from "react";
import NavbarClass from "./navbar.components.js";

export default class SignUp extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: ""
        }

    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });

        console.log("user state: ", this.state.username);

    }


    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
        console.log("pass state: ", this.state.password);
    }

    onSubmit(e){
        e.preventDefault();


        const user = {
            username: this.state.username,
            password: this.state.password
        }


        console.log(user);

        const url = "http://localhost:3001/users";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: user.username, password: user.password})
        }).then(res => {
            return res.text();
        }).then(data=>{
            //console.log("user: "+ this.state.username);
            //console.log("pass: "+ this.state.password);
            window.location="/login"; //actually check login or homepage???
        })

    }

    render(){
        return (
            <>
            <div style={{marginTop: "-2%"}}>
            <NavbarClass />
                
            </div>
                    
            <div style={{color:"white", backgroundColor: "#333940" ,margin:"2% 40% 5% 5%", padding: "3%"}}>
                <h3 style={{marginTop: "3%"}}> Sign Up </h3>
                <br/>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Username: </label>
                        <input style={{width: "70%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input style={{width: "70%"}}
                                type="password" 
                                required
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sign Up" className="btn btn-success" />
                    </div>

                </form>
            </div>
            </>
        );
    }

}