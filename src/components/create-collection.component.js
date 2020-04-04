import React, {Component} from "react";


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
            date: new Date()
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

        const collection = {
            name: this.state.name,
            description: this.state.description,
            itemCount: this.state.itemCount,
            date: this.state.date
        }

        console.log(collection);
        
        const url = "http://localhost:3001/collections"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: collection.name, description: collection.description})
        }).then(res => {
            return res.text();
        }).then(data => {
            window.location="/"; //return to homepage
        })
    }

    render(){
        return (
            <div>
                <h3 style={{marginTop: "3%"}}> Create Collection</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    
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
        );
    }

}
