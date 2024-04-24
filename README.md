This is a [Next.js](https://nextjs.org/) application prototype to use NextAuth.js with Keycloak.

## Getting Started

- Create a new client in keycloak

- configure ``.envrc``

```
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export KEYCLOAK_CLIENT_ID=<KEYCLOAK_CLIENT_ID>
export KEYCLOAK_CLIENT_SECRET=<EYCLOAK_CLIENT_SECRET>
export KEYCLOAK_ISSUER_URL=http://HOSTNAME:PORT/realms/<REALM_NAME>
```

- Load env vars

```
direnv allow
```

- Start

```
pnpm dev
```

## Usage

- List providers

```
curl http://localhost:3000/api/auth/providers | jq
```

- Open Sign-In page: http://localhost:3000