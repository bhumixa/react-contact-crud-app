
import './App.css';
import Contacts from './Contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from './AddContact';
import { useState } from 'react';

function App() {
  //contactList = [];
  const [contacts, setContact] = useState([]);

  const newContactAdded = (data) => {
    console.log('---add', data)
    setContact([...contacts], data)
    console.log(contacts)
  }
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Contacts contactList={contacts}/>}></Route>
            <Route exact path="add" element={<AddContact newContactHandler={newContactAdded} />} > </Route>

          </Routes>
        </BrowserRouter >
      </div>
    </>

  );
}

export default App;
