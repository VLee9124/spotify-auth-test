'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

export default function SpotifySignInButton() {
    const handleClick = () => {
        signIn('spotify')
    }

    return <button onClick={handleClick}>Log in with Spotify</button>
}
