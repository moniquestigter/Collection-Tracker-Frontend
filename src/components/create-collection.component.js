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

        window.location="/"; //return to homepage
    }

    render(){
        return (
            <div>
                <h3> Create Collection</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Collection" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }

}
