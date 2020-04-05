import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ListItems extends Component{
    constructor(props){
        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: [],
            collections_temp: [],
            collection_name: ""
        };

        this.name = "";
    }

 
    componentDidMount(){
       
        var pathArray = window.location.pathname.split('/');
        var col_id = pathArray[1];

        const url = "http://localhost:3001/" + col_id + "/items";
        fetch(url)
        .then(res => {
            return res.json();
        }).then(dataJSON => {
            return JSON.stringify(dataJSON);
        }).then(strJSON => {
            this.setState({items: JSON.parse(strJSON)});
            const url2 = "http://localhost:3001/collections/" + col_id; //for the name
            fetch(url2)
            .then(res => {
                return res.json();
            }).then(dataJSON => {
                return JSON.stringify(dataJSON);
            }).then(strJSON => {
                this.setState({collections_temp: JSON.parse(strJSON)});
                this.setState({collection_name: this.state.collections_temp[0].name})

            })
            return ;
        })

        
    }

    deleteItem(id){
        var pathArray = window.location.pathname.split('/');
        var col_id = pathArray[1];

        const url = "http://localhost:3001/" + col_id + "/items/" + id;
        console.log("url: "+ url);
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.text())
        .then(res=> console.log(res));
        
        this.setState({
            items: this.state.items.filter(it => it.id !== id)
        })
    }

    displayItems(){
        if(this.state.items.length === 0){
            return(
                <>
                <h5>You have not added any items yet!</h5>
                </>
            );
        } else {
        return this.state.items.map(e => {
            return (
                    <div className="card bg-light mb-3" style={{ width: '18rem' }} key={e.id}>
                        <div className="card-body" >
                            <h5 className="card-title">{e.name}</h5>
                            <small className="card-text">{e.description}</small>
                            <br/>
                            <p className="card-text" style={{float: "right", color: "gray"}}>L.{e.value}</p>
                            <br/>
                            <p className="card-text">Condition: {e.condition}</p>
                            <input type="submit" onClick={() => { this.deleteItem(e.id)}} className="btn btn-outline-danger btn-sm" value="Delete" style={{float: "right", marginBottom: "4%"}}/>
                        </div>
                    </div>
            );
        })
        }
    }

    render(){
        var pathArray = window.location.pathname.split('/');
        var col_id = pathArray[1];
        return (
            <div>
                <div style={{display: "inline", position: "relative"}}>
                    <a href="/" className="previous round"  style={{width: "3%"}}>&laquo; Back</a>
                    <h3 style={{textDecoration: "underline"}}>{this.state.collection_name}</h3>
                    <Link className="btn btn-secondary" style={{float: "right", marginTop: "-30px", marginRight: "50px"}} to={{
                        pathname: "/"+ col_id + "/items/create"
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