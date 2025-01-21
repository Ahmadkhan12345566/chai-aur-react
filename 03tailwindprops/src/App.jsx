import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {username: "hitash",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black'> tailwind css</h1>
     <Card channel="chia or code" someObject = {myObject} />
    </>
  )
}

export default App
