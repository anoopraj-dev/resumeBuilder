import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const App = () => {
  const {user,isLoaded,isSignedIn} =useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/signin'}/>
  }
  return (
    <div> 
     <Outlet/>
    </div>
  )
}

export default App

