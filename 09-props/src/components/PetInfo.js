import React from 'react'

export default function PetInfo({ animal, age }) {
    return (
        <div>
            <h1>My {animal} is {age} ears old</h1>
        </div>
    )
}
