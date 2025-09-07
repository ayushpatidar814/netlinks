"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            alert(result.message)
          } 
            
        )
        .catch((error) => console.error(error));
    }

  return (
    <div className='mx-4 sm:mx-auto max-w-full sm:max-w-lg bg-purple-100 my-8 sm:my-16 p-6 sm:p-8 rounded-lg flex flex-col gap-4 shadow-md'>
        <h1 className="font-bold text-xl sm:text-2xl text-center">Generate your short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input type="text" className='px-4 py-2 rounded-md focus:outline-purple-600 w-full' value={url} placeholder='Enter your URL' onChange={e=>{seturl(e.target.value)}}/>
            <input type="text" className='px-4 py-2 rounded-md focus:outline-purple-600 w-full' value={shorturl} placeholder='Enter your preferred short URL text' onChange={e=>{setshorturl(e.target.value)}}/>
            <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg py-3 sm:py-2 px-6 text-white font-bold hover:bg-purple-600 transition-colors duration-300'>Generate</button>
        </div>

        {generated && <div className='mt-4 break-words text-center'> <span className='font-bold text-lg block mb-2'>Your Link</span><code className='bg-white px-2 py-1 rounded'>
        <Link target="_blank" href={generated}>{generated}</Link>
          </code></div>}
    </div>
  )
}

export default Shorten