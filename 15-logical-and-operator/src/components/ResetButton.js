import React from 'react'

export default function ResetButton({onClick}) {
  return (
    <div><button style={{ backgroundColor: "lightgreen" }} onClick={onClick}>Reset</button></div>
  )
}
