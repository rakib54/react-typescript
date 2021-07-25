import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string;
    thoughts: string;
}
const Contacts = () => {
    const [contact, setContact] = useState<IContact>({
        name: "",
        thoughts: ""
    });
    const [contactList, setContactList] = useState<IContact[]>([])

    const handleClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            thoughts: ""
        })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleRemove = (thoughts: string) => {
        const newContactList = contactList.filter(c => c.thoughts !== thoughts)
        setContactList(newContactList)
    }


    return (
        <div>
            <h1 className="text-center">Your TODO</h1>

            <div className="form">
                <div className="mb-3 col-md-6 mx-auto">
                    <label htmlFor="name">Full Name </label>
                    <input
                        className="form-control"
                        value={contact.name}
                        onChange={handleOnChange}
                        name="name"
                        placeholder="Your Name"
                        type="text"
                    />
                </div>
                <div className="mb-3 col-md-6 mx-auto">
                    <label htmlFor="">Your Thoughts</label>
                    <input
                        className="form-control"
                        value={contact.thoughts}
                        onChange={handleOnChange}
                        name="thoughts"
                        placeholder="Your Thoughts"
                        type="text"
                    />
                </div>
            </div>
            <div className="mb-3 col-md-6 mx-auto">
                <button className="btn btn-success" onClick={handleClick}>Add</button>
            </div>


            {
                contactList.map((con) => <Contact key={con.name} name={con.name} thoughts={con.thoughts} handleRemove={handleRemove} />)
            }


        </div>
    );
};

export default Contacts;