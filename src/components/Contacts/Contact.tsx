import React from 'react';
import './Contact.css'

interface IProps {
    name: string,
    email?: string
}

const Contact = ({name, email ="N/A"}: IProps) => {

    return (
        <div className="card">
            <p>
                <strong>Name: </strong>{name}
            </p>
            <p>
                <strong>Name: </strong>{email}
            </p>
        </div>
    );
};

export default Contact;