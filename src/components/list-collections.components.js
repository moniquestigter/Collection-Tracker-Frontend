import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withAuth} from "@okta/okta-react";

export default class ListCollections extends Component{

    constructor(props){
        super(props); 

        this.deleteCollection = this.deleteCollection.bind(this);

        this.state = {
            collections: []
        };
    }
    
    logout = async () => {
        this.props.auth.logout("/login");
    };
    
    componentDidMount(){
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        const url = "http://localhost:3001/" + user_id + "/collections"
        fetch(url)
        .then(res => {
            return res.json();
        }).then(dataJSON => {
            return JSON.stringify(dataJSON);
        }).then(strJSON => {
            this.setState({collections: JSON.parse(strJSON)});
           // console.log(strJSON);
            //console.log(this.state.collections);
        })
    }

    deleteCollection(id){
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        const url = "http://localhost:3001/" + user_id + "/collections/" + id;

        fetch(url, {
            method: 'DELETE',
        }).then(res => res.text())
        .then(res=> console.log(res));

        this.setState({
            collections: this.state.collections.filter(col => col.id !== id)
        })

    }

    displayCollections() { 
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        if(this.state.collections.length === 0){
            return (
                <>
                <h5>No collections added yet!</h5>
                </>
            );
        }
        return this.state.collections.map(e => {
            //console.log(e.id);
            return (
                    <div className="card bg-light mb-3" style={{ width: '19rem' }} key={e.id}>
                        <div className="card-body" >
                            <h5 className="card-title">{e.name}</h5>
                            <small className="card-text">{e.description}</small>
                            <br/>
                            <br/>
                            <input type="submit" onClick={() => {this.deleteCollection(e.id)}} className="btn btn-outline-danger btn-sm" value="Delete" style={{float: "left"}}/>
                            <Link className="btn btn-info btn-sm" style={{float: "right"}} to={{
                                pathname: `/${user_id}/${e.id}/items`, 
                                param: `${e.id}`,
                                colName: `${e.name}`
                                }}>Show Items</Link>
                            <br/>
                        </div>
                    </div>
            );
        })    
    }

    render(){
        var pathArray = window.location.pathname.split('/');
        var user_id = pathArray[1];
        return (
            
            <div className="container">
                <div style= {{display: "inline"}}>
                    <h3 style={{margin: "20px 0 0 -5px"}}>My Collections</h3>
                    <Link className="btn btn-secondary" style={{float: "right", marginTop: "-20px", marginRight: "50px"}} to={{
                        pathname: "/"+ user_id + "/create"
                        }}>+ New Collection</Link>
                </div>
                <br/>
                <br/>
                <div className="card-columns" style={{display: "inline-block"}}>
                   {this.displayCollections()}
                </div>
            </div>
        );
    }
}
