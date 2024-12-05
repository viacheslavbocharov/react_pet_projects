import React from 'react'
import Person from './person'
import persons from '../data/persons'

export default function PersonsList() {
    return (
        <div className="cards">
            {persons.map((person) => {
                return (
                    <Person key={person.id} {...person} />
                )
            })}
        </div>
    )
}
