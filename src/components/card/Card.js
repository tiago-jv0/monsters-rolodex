import React from 'react';
import './CardStyle.css'

const Card = ({ name, email, avatar }) => {
    return (
        <div className='card-container'>
            <img src={avatar} alt="Monster Avatar" />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default Card;
