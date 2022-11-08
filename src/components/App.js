
import './App.css';
import Contacts from './Contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from './AddContact';
import { useState } from 'react';
import ContactDetails from './ContactDetails';
import { useLocation, Navigate, useNavigate } from 'react-router-dom'

// function App() {
//   const navigate = useNavigate()
//   //contactList = [];
//   const [contacts, setContact] = useState([]);

//   const newContactAdded = async (data) => {
//     console.log('---add', data)
//     let newContact = [...contacts]

//     console.log(newContact)
//     await newContact.push(data)
//     await setContact(newContact)


//     console.log(contacts)
//   }

//   const contactListUpdated = async (contacts) => {
//     console.log('contacts')
//     console.log(contacts)
//     await setContact(contacts)
//   }

//   return (

//     <>
//       <div className="container">
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/" element={<Contacts contactList={contacts} contactListUpdatedHandler={contactListUpdated} />}></Route>
//             <Route exact path="add" element={<AddContact newContactHandler={newContactAdded} />} > </Route>
//             <Route exact path="contact/:id" element={<ContactDetails />} > </Route>
//           </Routes>


//         </BrowserRouter >
//       </div>
//     </>

//   );
// }
function App() {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  )
}

function RouterComponent() {
  const [contacts, setContact] = useState([]);
  const navigate = useNavigate();

  const newContactAdded = async (data) => {
    console.log('---add', data)
    let newContact = [...contacts]

    console.log(newContact)
    await newContact.push(data)
    await setContact(newContact)


    console.log(contacts)
  }

  const contactListUpdated = async (contacts) => {
    console.log(contacts)
    await setContact(contacts)
  }

  return (
    <div className="App">
      <>
        <Routes>
          <Route exact path="/" element={<Contacts contactList={contacts} contactListUpdatedHandler={contactListUpdated} />}></Route>
          <Route exact path="add" element={<AddContact newContactHandler={newContactAdded} navigate={navigate} />} > </Route>
          <Route exact path="contact/:id" element={<ContactDetails />} > </Route>
        </Routes>
      </>
    </div>
  )
}
export default App;
