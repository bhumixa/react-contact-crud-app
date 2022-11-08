import React, { Component } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";

function ContactDetails(props) {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const { id } = useParams();

  return (
    <>
      <div className="container my-3">
        <div class="card">
          {/* <img src="img.jpg" alt="John" /> */}
          <h1>{state.name}</h1>
          <p class="title">{state.email}</p>
        </div>
        {/* <h3> Contact Details of {id} </h3>
        <div>
          Name: {state.name}
          email: {state.email}
        </div> */}
      </div>
    </>
  );
}

export default ContactDetails;

// export default class ContactDetails extends Component {
//   constructor(props) {
//     super(props);

//     console.log(this.props.location);
//     //const { id, name, email } = this.state;

//   }

// //   ccomponentDidMount() {
// //     const location = useLocation()
// //   }

//   render() {
//     console.log(this.props.location);
//     //const id = navigation.getParam("id");
//     //console.log(id);
//     return <div>contact </div>;
//   }
// }
