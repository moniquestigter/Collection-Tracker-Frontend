import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesome} from "react-icons";


export default class ListCollections extends Component{

    constructor(props){
        super(props); 

        this.state = {
            collections: []
        };
    }
    
    componentDidMount(){
        const url = "http://localhost:3001/collections"
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

    displayCollections() { 
        return this.state.collections.map(e => {
            //console.log(e.id);
            return (
                    <div className="card bg-light mb-3" style={{ width: '19rem' }} key={e.id}>
                        <div className="card-body" >
                            <h5 className="card-title">{e.name}</h5>
                            <small className="card-text">{e.description}</small>
                            <br/>
                            <br/>
                            <input type="submit" className="btn btn-outline-danger btn-sm" value="Delete" style={{float: "left"}}/>
                            <Link className="btn btn-info btn-sm" style={{float: "right"}} to={{
                                pathname: `/${e.id}/items`, 
                                param: `${e.id}`,
                                paramName: `${e.name}`
                                }}>Show Items</Link>
                            <br/>
                        </div>
                    </div>
            );
        })    
    }

    render(){
        return (
            <div>
                <div style= {{display: "inline"}}>
                    <h3 style={{margin: "20px 0 0 -5px"}}>My Collections</h3>
                    <Link to="/create" className="btn btn-secondary" style={{float: "right", marginTop: "-20px", marginRight: "50px"}}>+ New Collection</Link>
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