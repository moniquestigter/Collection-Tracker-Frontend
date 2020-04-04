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
                    <div className="card bg-light mb-3" style={{ width: '19rem' }} key={e.id}>
                        <div className="card-body" >
                            <h5 className="card-title">{e.name}</h5>
                            <small className="card-text">{e.description}</small>
                            <br/>
                            <p className="card-text" style={{float: "right", color: "gray"}}>L.{e.value}</p>
                            <br/>
                            <p className="card-text">Condition: {e.condition}</p>
                            <input type="submit" className="btn btn-outline-danger btn-sm" value="Delete" style={{float: "right", marginBottom: "-10px;"}}/>
                        </div>
                    </div>
            );
        })
    }

    render(){
        return (
            <div>
                <div style = {{display: "inline"}}>
                    <h3>{this.props.location.paramName}</h3>
                    <Link className="btn btn-secondary" style={{float: "right", marginTop: "-30px", marginRight: "50px"}} to={{
                        pathname: "/"+ this.props.location.param + "/items/create", 
                        param2: this.props.location.param,
                        }}>+ New Item</Link>
                </div>
                <br/>
                <br/>
                <div className="card-columns" style={{display: "inline-block"}}>
                   {this.displayItems()}
                </div>
            </div>
        );
    }

}