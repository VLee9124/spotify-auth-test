import Image from 'next/image'
import Login from '@/components/Login'
import SpotifySignInButton from '@/components/SpotifySignInButton'

export default function Home() {
    return (
        <main>
            <h1>I love Popbob 2B2T</h1>
            {/* <Login /> */}
            <SpotifySignInButton />
        </main>
    )
}
