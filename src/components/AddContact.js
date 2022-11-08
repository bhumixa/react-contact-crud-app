import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom';
import { useLocation, Navigate, useNavigate } from 'react-router-dom'

// const AddContact = (props) => {
//     const myuuid = uuidv4();
//     const [contact, setContact] = useState({
//         id: myuuid,
//         name: "",
//         email: ""
//     })
//     const navigate = useNavigate()


//     const addNewContact = async () => {
        
//         console.log(contact)
//         await props.newContactHandler(contact)
//         navigate('/')
        
//         // setTimeout(async()=>{           
//         //     console.log(contact)
           
//         //     navigate('/')
//         // }, 1000)
        
       
//         // await this.setState({ id: myuuid })
//         // console.log(this.state)
//         // this.props.newContactHandler(this.state)

//         // useEffect(() => {
//         //     const navigate = useNavigate();
//         //     navigate('/')
//         // }, []);

//     }
//     return (
//         <>
//             <div className="my-3 container">
//                 <div className="card col-md-12 mx-auto" style={{ width: '18rem' }}>
//                     <h3 className='mx-3 my-3'> Add New Contact</h3>

//                     <div className="row justify-content-md-center">
//                         <form className="row g-3 container " >
//                             <div className="row  my-2">
//                                 <div className="col">
//                                     <label htmlFor="staticEmail2" >Name</label>
//                                     <input type="text" className="form-control" id="name" onChange={async (e) => await setContact({ ...contact, name: e.target.value })} />
//                                 </div>
//                             </div>
//                             <div className="row  my-2">
//                                 <div className="col">
//                                     <label htmlFor="inputPassword2" >Email</label>
//                                     <input type="text" className="form-control" id="email" placeholder="Email" onChange={async (e) => await setContact({ ...contact, email: e.target.value })} />
//                                 </div>
//                             </div>
//                             <div className="row  my-2">
//                                 <div className="col">
//                                     <button type="button" className="btn btn-primary mb-3" onClick={() => addNewContact()}>Save</button>
//                                 </div>
//                             </div>

//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )

// }

export class AddContact extends Component {

    static propTypes = {
        id: "",
        name: "",
        email: ""
    }

    constructor(props) {
        let myuuid = uuidv4();
        
        super(props)
        this.state = {
            id: myuuid,
            name: '',
            email: ''
        }
        console.log(this.props)
    }

    addContact = async () => {
        console.log(this.state)
        this.props.newContactHandler(this.state)
        this.props.navigate('/')
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
                                        <label htmlFor="staticEmail2" >Name</label>
                                        <input type="text" className="form-control" id="name" onChange={(e) => this.state.name = e.target.value} />
                                    </div>
                                </div>
                                <div className="row  my-2">
                                    <div className="col">
                                        <label htmlFor="inputPassword2" >Email</label>
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
