import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class ListItems extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount(){
        console.log("id prop: "+ this.props.location.param);
        const url = "http://localhost:3001/" + this.props.location.param + "/items";
        fetch(url)
        .then(res => {
            return res.json();
        }).then(dataJSON => {
            return JSON.stringify(dataJSON);
        }).then(strJSON => {
            this.setState({items: JSON.parse(strJSON)});
           // console.log(strJSON);
            console.log(this.state.items);
        })
    }

    displayItems(){
        return this.state.items.map(e => {
            return (
                    <div className="card" style={{ width: '19rem' }} key={e.id}>
                        <div className="card-body card-body-border-dark" >
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.description}</p>
                            <p className="card-text">{e.value}</p>
                            <p className="card-text">{e.condition}</p>
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
                <h3>Items</h3>
                <Link to={{
                    pathname: "/"+ this.props.location.param + "/items/create", 
                    param2: this.props.location.param,
                    activeClassName: "btn btn-primary"
                    }}>+ New Item</Link>
                <div className="card-deck-bs-prefix card-deck-as col d-flex flex-column px-0">
                   {this.displayItems()}
                </div>
            </div>
        );
    }

}