import { useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import confg from'./envImport/confg'
import authservice from "./appwrite/authservice"
import {login , logout} from "./store/authSlice"
import {Header , Footer} from './components'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const[loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
    <div className='w-full block'>
      <Header/>
      <main> 
        {/* <Outlet/>  */}
      </main>
      <Footer/>
    </div>
    </div>
  ) : null
}

export default App
