import React, {Component} from "react";
import {Link} from "react-router-dom"
import {Navbar,Button,Form,FormControl,Nav, Container} from "react-bootstrap"

export default class NavbarClass extends Component {

    render(){
        return(
            <div>
                    <Navbar bg="dark" variant="dark">
                        <Nav.Link href="/" >Track Your Collections!</Nav.Link>
                        <Form inline >
                            <FormControl type="text" placeholder="Search Collection" className="mr-sm-2"/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
            </div>
        );
    }
}