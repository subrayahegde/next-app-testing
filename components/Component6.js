import Head from "next/head";
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Component6() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  
  
  useEffect(() => {  
    const pathUrl = process.env.NEXT_PUBLIC_API_URL +"/api/blogPosts";
    fetch(pathUrl)
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
       <h1 className="font-bold">Component6</h1>
     </div>
     
      <h2><u>List of Blog Posts</u></h2>
          {data.map((d) => (
            <li key={d.id}>{d.title}</li>
          ))} 
      <br />
      <h3> For details,  <Link href={`/posts`}><u>Click Me</u></Link></h3>     
    </div>
  )
}

