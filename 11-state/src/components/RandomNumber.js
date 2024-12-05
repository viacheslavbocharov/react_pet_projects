import React from 'react'
import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

export default function RandomNumber({maxNum}) {
    const [randomNum, setRundomNum] = useState(generateRandomNum(maxNum))

    function increaseCounter() {
        setRundomNum(randomNum + 1)
    }

    function changeRandomNum() {
        setRundomNum(generateRandomNum(maxNum))
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate random number</button>
            <button onClick={increaseCounter}>Add 1</button>
        </div>
    )
}
