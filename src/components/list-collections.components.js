import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ListCollections extends Component{

    constructor(props){
        super(props); 

        this.deleteCollection = this.deleteCollection.bind(this);

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

    deleteCollection(id){
        const url = "http://localhost:3001/collections/" + id;

        fetch(url, {
            method: 'DELETE',
        }).then(res => res.text())
        .then(res=> console.log(res));

        this.setState({
            collections: this.state.collections.filter(col => col.id !== id)
        })

    }

    displayCollections() { 
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
                                pathname: `/${e.id}/items`, 
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
        return (
            
            <div className="container">
            
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