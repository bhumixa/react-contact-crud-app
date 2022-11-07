import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {v4 as uuidv4} from 'uuid';

export class AddContact extends Component {
    static propTypes = {
        id: "",
        name: "",
        email: ""
    }

    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }

    addContact = async() => {
        let myuuid = await uuidv4();
        console.log(myuuid)
        await this.setState({id:myuuid})
        console.log(this.state)
        this.props.newContactHandler(this.state)
    }

    render() {
        return (
            <>
                <div className="my-3 container">
                    <div className="card col-md-12 mx-auto" style={{ width: '18rem' }}>
                        <h3 className='mx-3 my-3'> Add New Contact</h3>
                        <div className="row justify-content-md-center">
                            <form className="row g-3 container " >
                                <div className="row  my-2">
                                    <div className="col">
                                        <label for="staticEmail2" >Name</label>
                                        <input type="text" className="form-control" id="name" onChange={(e) => this.state.name = e.target.value} />
                                    </div>
                                </div>
                                <div className="row  my-2">
                                    <div className="col">
                                        <label for="inputPassword2" >Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e) => this.state.email = e.target.value} />
                                    </div>
                                </div>
                                <div className="row  my-2">
                                    <div className="col">
                                        <button type="button" className="btn btn-primary mb-3" onClick={() => this.addContact()}>Save</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default AddContact
