import React from 'react'

export default function Person({ firstName, lastName, email, img }) {
    return (
        <div className='card'>
            <img src={img} alt="person img"/>
            <h3>{firstName} {lastName}</h3>
            <h4>email: {email}</h4>
        </div>
    )
}