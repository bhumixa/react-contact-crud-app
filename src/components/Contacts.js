import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom';

export class Contacts extends Component {
    constructor(props) {

        super(props)
        console.log(this.props.contactList)
        this.state = {
            contacts: [
                {
                    id: "1",
                    name: "bhumi",
                    email: "bhumi@gmail.com"
                },
                {
                    id: "2",
                    name: "UI",
                    email: "ui@gmail.com"
                }
            ]
        }
    }

    removeContact(id) {
        console.log(id)
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row  justify-content-md-end">
                        <div className="col">
                            <Link to="/add">
                                <button type="button" className="btn btn-primary mb-3">
                                    Add </button>
                            </Link>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-info">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contacts.map((contact) => {

                                return <tr className="table-primary" scope="row">
                                    <td> <Link to={{ pathname: `contact/${contact.id}` }} >
                                        {contact.id}
                                        </Link>
                                    </td>
                                    <td key={contact.id}>{contact.name}</td>
                                    <td key={contact.id}>{contact.email}</td>
                                    <td >
                                        <button type="button" className="btn btn-danger" onClick={() => this.removeContact(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
}

export default Contacts
