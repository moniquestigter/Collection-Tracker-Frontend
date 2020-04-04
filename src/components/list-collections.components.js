import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CardDeck} from "react-bootstrap"


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
            console.log(e.id);
            return (
                    <div className="card" style={{ width: '19rem' }} key={e.id}>
                        <div className="card-body card-body-border-dark" >
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.description}</p>
                            <Link to={{
                                pathname: `/${e.id}/items`, 
                                param: `${e.id}`,
                                activeClassName: "btn btn-primary"
                                }}>Show Items</Link>
                            <br/>
                            <p className="text-muted">Created {e.date}</p>
                        </div>
                    </div>
            );
        })    
    }

    render(){
        return (
            <div>
                <h3>Collections</h3>
                <Link to="/create" className="btn btn-primary">+ New Collection</Link>
                <div className="card-deck-bs-prefix card-deck-as col d-flex flex-column px-0">
                   {this.displayCollections()}
                </div>
            </div>
        );
    }
}