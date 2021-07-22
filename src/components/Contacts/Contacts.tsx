import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {

    const [contact, setContact] = useState("")
    const [contactList, setContactList] = useState<string[]>([])


    const handleClick = () => {
        setContactList([...contactList, contact])
        setContact("")
    }
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact Name"
                />
                <button onClick={handleClick}>Add contact</button>
            </div>
            {
                contactList.map((contact) => <Contact name={contact} key={contact}  />)
            }
            {/* <Contact name="Rakibur Rahman" email="rakibur74@gmail.com" />
            <Contact name="Rakibur Rahman" email="rakibur74@gmail.com" />
            <Contact name="Rakibur Rahman" email="rakibur74@gmail.com" />
            <Contact name="Rakibur Rahman" email="rakibur74@gmail.com" /> */}
        </div>
    );
};

export default Contacts;