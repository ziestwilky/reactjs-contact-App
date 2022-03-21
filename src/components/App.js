import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import './App.css';


function App() {
  const loacl_storage_key = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts, { id: uuidv4(),...contact}]);
  }
  const removeConatctHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
       return contact.id !== id;
    });
    setContacts(newContactList);
     
  }
  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(loacl_storage_key));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(loacl_storage_key,JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className='ui container'><Header />
    <AddContacts addContactHandler={addContactHandler} />
    <ContactList contacts={contacts}  getContactId={removeConatctHandler} />
    </div>
 
  );
}

export default App;
