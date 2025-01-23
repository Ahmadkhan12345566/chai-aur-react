import { useState ,useCallback ,useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const  [numberAllowed , setnumberAllowed] = useState(false)
  const [charAlowed,setcharAlowed] =  useState(false)
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const passwordGenerator = useCallback(()=>{


      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str +=  "0123456789"
      if(charAlowed) str += "!£$%^&*()_+"

      for (let index = 1; index < length; index++) {
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char); 
      }
      setPassword(pass)

  },[length,numberAllowed,charAlowed,setPassword])


  useEffect(()=>{
passwordGenerator()

  },[length,numberAllowed,charAlowed,passwordGenerator])
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white ' >Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input
          type="text"  
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}
         />

         <button className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white' onClick={copyPasswordToClipboard}  >copy</button>
         </div> 
         <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1' >
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value) }}
            />
            <label >Length:{length} </label>

         
         </div>
         <div className='flex items-center gap-x-1' >
             <input type="checkbox"
             defaultValue={numberAllowed}
             id='numberInput'
             onChange={()=>{
              setnumberAllowed((prev) => !prev)
             }}

             />
             <label htmlFor=""> Numbers</label>
         </div>
         <div className='flex items-center gap-x-1' >
             <input type="checkbox"
             defaultValue={charAlowed}
             id='numberInput'
             onChange={()=>{
              setcharAlowed((prev) => !prev)
             }}

             />
             <label htmlFor="">Characters</label>
         </div>

        </div>
       </div>
    </>
  )
}

export default App
