import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Contacts extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.contactList);
    this.state = {
      contacts: this.props.contactList,
    };
  }

  async removeContact(id) {
    let newList = await this.state.contacts.filter((x) => x.id !== id);
    this.setState({ contacts: newList });
    await this.props.contactListUpdatedHandler(newList);
  }

  render() {
    let contactContent;
    if (this.state.contacts.length > 0) {
      contactContent = (
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
            {this.state.contacts.map((contact, index) => {
              return (
                <tr className="table-primary" key={contact.id}>
                  <td>
                    {" "}
                    <Link to={{ pathname: `contact/${contact.id}` }}>
                      {contact.id}
                    </Link>
                  </td>
                  <td key={contact.id}>{contact.name}</td>
                  <td key={contact.id}>{contact.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.removeContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      contactContent = (
        <div className="row text-center my-2 ">
          <div className="col text-center">
            No Contact Found. Please Add
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="container">
          <div className="row text-end my-2 ">
            <div className="col text-end">
              <Link to="/add">
                <button type="button" className="btn btn-primary mb-3 ">
                  Add
                </button>
              </Link>
            </div>
          </div>
          {contactContent}
        </div>
      </>
    );
  }
}

export default Contacts;
