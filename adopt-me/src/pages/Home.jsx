import React from 'react'
import Landing from '../Components/Landing/Landing'
import Search from '../Components/Search/Search'
import Available from '../Components/Available/Available'
import Journey from '../Components/Journey/Journey'
import Working from '../Components/Working/Working'
import Upload from '../Components/Upload/Upload'
import Faq from '../Components/FAQ/Faq'
import { useFirebase } from '../context/Firebase'

const HomePage = () => {
  const firebase = useFirebase();
  if(!firebase.isLoggedIn)return <div role="alert " className='mx-96 my-48'>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 ">
    <p>You are not logged in. Please log in first</p>
  </div>
</div>
  return (
    <>
    <Landing/>
    <Search/>
    <Available/>
    <Journey/>
    <Working/>
    <Upload/>
    <Faq/>
    </>
  )
}

export default HomePage