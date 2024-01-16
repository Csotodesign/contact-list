import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  if (!selectedContactId){
    return (
    <>
    <ContactList key="ContactList" setSelectedContactId={setSelectedContactId}/>
    </>
    );
  } else {
    return (
      <>
      <SelectedContact key={selectedContactId} selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      </>
    )
  }
}