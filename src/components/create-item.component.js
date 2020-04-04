import React, {Component} from "react";

export default class CreateItem extends Component{
    constructor(props){
        super(props);

        this.onChangeCollectionId = this.onChangeCollectionId.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeCondition = this.onChangeCondition.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            collection_id: 0,
            name: "",
            description: "",
            value: 0,
            condition: "",
            date: new Date()
        }
    }

    onChangeCollectionId(e){
        this.setState({
            collection_id: e.target.value
        });
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

    onChangeValue(e){
        this.setState({
            value: e.target.value
        });
    }

    onChangeCondition(e){
        this.setState({
            condition: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date: e
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.props.location.param2);
        const item = {
            collection_id: this.props.location.param2,
            name: this.state.name,
            description: this.state.description,
            value: this.state.value,
            condition: this.state.condition,
            date: this.state.date
        }

        console.log(item);
        
        const url = "http://localhost:3001/" + this.props.location.param2 + "/items";
        console.log("url: " + url);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({collection_id: item.collection_id, name: item.name, description: item.description, value: item.value, condition: item.condition})
        }).then(res => {
            return res.text();
        }).then(data => {
            //window.location="/" + this.props.location.param2 + "/items"; //return to items "homepage" FFIXXX!!!!
        }) 
    }

    render(){
        return (
            <div>
                <h3 style={{marginTop: "3%"}}> Add Item</h3>
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
                        <input style={{width: "70%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <label>Value: </label>
                        <input style={{width: "20%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.value}
                                onChange={this.onChangeValue} />
                    </div>

                    <div className="form-group">
                        <label>Condition: </label>
                        <input style={{width: "30%"}}
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.condition}
                                onChange={this.onChangeCondition} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}