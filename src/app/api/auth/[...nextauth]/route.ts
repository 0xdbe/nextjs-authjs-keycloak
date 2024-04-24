import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Keycloak({
          clientId: process.env.KEYCLOAK_CLIENT_ID as string,
          clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
          issuer: process.env.KEYCLOAK_ISSUER_URL,
        }),
    ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }