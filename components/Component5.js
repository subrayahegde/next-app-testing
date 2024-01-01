import Head from "next/head";
import { useState, useEffect } from 'react'

export default function Component5() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://api.github.com/users/subrayahegde/repos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div>
     <div className="text-red dark:text-white">
       <h1 className="font-bold">Component5</h1>
     </div>
     <ul className="list-disc list-inside">
      <h2><u>List of my Github repos</u></h2>
         {data.map((d) => (
           <li key={d.id}>{d.name}</li>
         ))} 
     </ul>
    </div>
  )
}

