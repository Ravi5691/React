import { useState ,useCallback , useEffect , useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [password , setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  //Password Generator
  const passwordGenerator = useCallback( () => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@£$%^&*()_-+=#{}[]|<>`?~"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  }, [length , numberAllow , charAllow , setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()} , [length , numberAllow , charAllow , passwordGenerator])
  return (
    <>
     <div className='h-44 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-slate-800'>
      <br></br>
        <h1 className=' text-center text-xl  text-white font-bold my-3  '> PASSWORD GENERATOR </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input
              type="text" 
              value = {password} 
              className='outline-none w-full py-1 px-3' 
              placeholder="Password" 
              readOnly
              ref = {passwordRef}>
           </input>
           <button 
           onClick={copyPasswordToClipboard}
           className='bg-slate-600 text-white w-11 hover:bg-slate-700'>
                copy
           </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-l text-white'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length} 
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-l text-white'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllow} 
            id="numberInput"
            onChange={() => {
              setNumberAllow ((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-l text-white'>
            <input 
            type="checkbox"
            defaultChecked = {charAllow} 
            id="charInput"
            onChange={() => {
              setCharAllow ((prev) => !prev);
            }}
            />
            <label>Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
