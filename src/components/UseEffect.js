import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
         document.title = `chat ${count || ''}`
    })
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default UseEffect