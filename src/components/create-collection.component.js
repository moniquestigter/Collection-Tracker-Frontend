import React, {Component} from "react";
import NavbarClass from "./navbar.components.js";

export default class CreateCollection extends Component {

    constructor(props){
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeItemCount = this.onChangeItemCount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            description: "",
            itemCount: 0,
            date: new Date(),
            user_id: 0
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeItemCount(e){
        this.setState({
            itemCount: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date: e
        });
    }

    onSubmit(e){
        e.preventDefault();
        var pathArray = window.location.pathname.split('/');
        var u_id = pathArray[1];

        const collection = {
            name: this.state.name,
            description: this.state.description,
            itemCount: this.state.itemCount,
            date: this.state.date,
            user_id: u_id
        }

        console.log(collection);
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        console.log("useri id: ", user_id);
        const url = "http://localhost:3001/" + user_id + "/collections";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: collection.name, description: collection.description, user_id: collection.user_id})
        }).then(res => {
            return res.text();
        }).then(data => {
            window.location="/"+ user_id; //return to homepage
        })
    }

    render(){
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        return (
            <>
            <div style={{marginTop: "-2%", marginLeft: "-7%"}}>
            <NavbarClass />
                
            </div>
            <div style={{color:"white", backgroundColor: "#333940" , margin:"2% 10% 5% 5%", padding: "3%"}}>
                <a href={"/" + user_id} className="previous round" >&laquo; Back</a>
                <h3 style={{marginTop: "3%"}}> Create Collection</h3>
                <br/>
                <form onSubmit={this.onSubmit} >
                    
                    <div className="form-group">
                        <label>Name: </label>
                        <input style={{width: "50%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input style={{width: "80%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Collection" className="btn btn-success" />
                    </div>

                </form>
            </div>
            </>
        );
    }

}
