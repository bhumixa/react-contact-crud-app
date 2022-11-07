import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

function ContactDetails() {
    const { id } = useParams()
    return (
        <>
            <div className="container">
                Contact {id}
            </div>
        </>
    )
}

export default ContactDetails


