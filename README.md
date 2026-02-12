# React GraphQL Users

Modern React + Vite + Apollo Client CRUD UI for users.

## Requirements
- Node.js 14+
- GraphQL API at http://localhost:8080/graphql

## Setup
```bash
npm install
npm run dev
```

## Environment
Copy .env.example to .env and adjust if needed:

VITE_GRAPHQL_URL=http://localhost:8080/graphql

## Build
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
  apollo/
    client.js
  graphql/
    queries.js
    mutations.js
  pages/
    Users.jsx
  components/
    UserList.jsx
    AddUserForm.jsx
  App.jsx
  main.jsx
  index.css
```

## Features
- Fetch users
- Add users
- Delete users
- Loading and error states
