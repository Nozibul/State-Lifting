
// State Lifting and Filtering 

import React from 'react'
import { useState } from 'react'
import ContactsForm from './components/ContactsForm'
import Table from './components/Table';



const App = () => {
    const [contacts, setContacts] = useState([]); 
    console.log(contacts); 
    //{name: 'Islam', email: 'nozibu', group: 'home'}  {name: 'fdvcx', email: 'nozibulislamspi@gmail.com', group: ''}
  
    const getContact = (contact) =>{
         setContacts([].concat(contacts, contact))
    }

  return (
    <>
      <h1>State Lifting and Filtering : class No. 40</h1>
      <div>
         <h2>Contact App</h2>
         <ContactsForm getContact={getContact}/>         
         <Table contacts={contacts}/> 
      </div>
    </>
  )
}

export default App 