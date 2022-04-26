import React from 'react';

export default function Member(props) {
    const {details} = props;

    if(!details) {
        return <h3>Generating List, please wait...</h3>
    }

        return (
            <div className ='members-container'>
                <h2>{details.name}</h2>
                <p>Email: {details.email}</p>
                <p>Role: {details.role}</p>
            </div>
        )


}