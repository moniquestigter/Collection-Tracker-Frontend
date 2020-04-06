import React, {Component} from "react";
import {Route} from "react-router-dom";
import NavbarClass from "./navbar.components.js";
export default class Login extends Component {


    constructor(props){
        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            current_user_id: 0,
            current_user_name: "",
            logged_in: false
        }

    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }


    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        const {history} = this.props;

        const user = {
            username: this.state.username,
            password: this.state.password
        }


        const url = "http://localhost:3001/users";
        fetch(url)
        .then(res => {
            return res.json();
        }).then(dataJson => {
            return JSON.stringify(dataJson);
        }).then(strJSON => {
            var curr_user = JSON.parse(strJSON);
            //console.log("curr user id: " , curr_user);  
            curr_user.forEach(el => {
                if(el.username === this.state.username && el.password === this.state.password){
                    this.setState({current_user_id: el.id, current_user_name: el.username, logged_in: true});
                    history.push("/"+ el.id);
                    //window.location="/" + el.id;
                }
            });
        })

    }

    render(){
        return (
            <div style={{marginTop: "-2%"}}>
                <NavbarClass username={this.state.current_user_name}/>
                <div style={{color:"white", backgroundColor: "#333940" , margin:"2% 40% 5% 5%", padding: "2%"}}>
                <h3 style={{marginTop: "3%"}}> Login </h3>
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
                        <input type="submit" value="Login" className="btn btn-success" />
                    </div>

                </form>
            </div>
            <div style={{float: "right", marginTop: "-25%", marginRight: "8%", textAlign: "center"}}>
                <h3>Don't have an account?</h3>
                <a href="/signup">Click Here!</a>
            </div>
            
            </div>
            
        );
    }

}