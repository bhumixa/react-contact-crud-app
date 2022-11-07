import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types'

export class Contacts extends Component {
    constructor(props) {
        super()
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
            <table class="table">
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
                            <td> </td>
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
        )
    }
}

export default Contacts
