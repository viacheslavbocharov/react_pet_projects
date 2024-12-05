import React from 'react'

export default function PetInfo({ animal, age, hasPet }) {
    return (
        hasPet
            ? (<h1>My {animal} is {age} ears old</h1>)
            : (<h2>Dont't have pet</h2>)
    )
}
