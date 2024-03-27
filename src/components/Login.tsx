'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const Login = () => {
    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div>
                <h1>Logged in as {session.user.email}</h1>
                <button onClick={() => signOut()}>Logout</button>
            </div>
        )
    }

    return <button onClick={() => signIn()}>Login with Spotify</button>
}

export default Login
