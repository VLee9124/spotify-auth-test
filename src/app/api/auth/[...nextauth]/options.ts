import type { NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { signOut } from 'next-auth/react'

export const options: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: {
                params: {
                    show_dialog: true,
                    scope: 'user-read-email user-library-read playlist-read-collaborative',
                },
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
}
