import React from 'react';

interface IProps{
    name: string;
    thoughts?: string;
    handleRemove: (thoughts: string) => void
}

const Contact = ({name, thoughts = "Nothing to do", handleRemove}: IProps)  => {
    return (
        <div className="card">
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>thoughts:</strong> {thoughts}
            </p>
            <button className="btn btn-danger" onClick={() => handleRemove(thoughts)}>Remove</button>
        </div>
    );
};

export const ContactDemo : React.FC<IProps> = ({name, thoughts = "N/A"}) => {
    return (
        <div className="card">
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>thoughts</strong> {thoughts}
            </p>
        </div>
    );
};

export default Contact;