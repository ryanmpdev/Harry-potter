import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {
  const API = "https://hp-api.herokuapp.com/api/characters"

  const [harry, setHarry] = useState([])
  useEffect(() => {
axios.get(API).then((response) => {
  console.log(response)
 setHarry(response.data.slice(0, 25))
})
  }, [API])
  return (
    <div>
      {harry.map((item) => (
        <>
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name} />
        </>
      ))}
    </div>
  )
}
