import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { redirect } from 'react-router-dom'

function Home() {
    const [user] = useAuthState(auth)

  return (
    <>
        {!user && redirect('/')}
        <div>
            
        </div>
    </>
  )
}

export default Home