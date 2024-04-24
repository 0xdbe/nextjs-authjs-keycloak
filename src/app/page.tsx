import { getServerSession } from "next-auth"

export default async function Home() {

  const session = await getServerSession()

  return (
    <>
      <h1>Home</h1>
      <div>
        {session?.user?.name ? (
            <div>
              <div>welcome {session.user.name}!</div>
              <a href="/api/auth/signout">Sign out</a>
            </div>
        ) : (
          <a href="/api/auth/signin">Sign in</a>
        )}
      </div>
        
    </>
  )
}
