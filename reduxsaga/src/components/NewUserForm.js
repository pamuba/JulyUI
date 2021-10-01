import React, { Component } from 'react'
import {Form, FormGroup, Button, Input, Label} from 'reactstrap'

export class NewUserForm extends Component {

    state = {
        firstName:'',
        lastName:''
    }
    handleFirstNameChange = e => {
        this.setState({
            firstName:e.target.value
        })
    }
    handleLastNameChange = e => {
        this.setState({
            lastName:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {firstName, lastName} = this.state

        this.props.onSubmit({
            firstName,
            lastName
        });

        this.setState({
            firstName:'',
            lastName:''
        })
    }
    render() {
        return (
           <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                   <Label>First Name</Label>
                   <Input required placeholder="First Name" value={this.state.firstName}
                    onChange={this.handleFirstNameChange} />
               </FormGroup>
               <FormGroup>
                   <Label>Last Name</Label>
                   <Input required placeholder="Last Name" value={this.state.lastName}  
                   onChange={this.handleLastNameChange} />
               </FormGroup>
               <FormGroup>
                   <Button block outline type="submit" color="primary">
                       Create
                   </Button>
               </FormGroup>
           </Form>
        )
    }
}

export default NewUserForm
