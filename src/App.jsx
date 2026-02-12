import Users from "./pages/Users.jsx";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">Users</h1>
          <p className="app__subtitle">Manage users with GraphQL + Apollo Client</p>
        </div>
      </header>
      <main className="app__main">
        <Users />
      </main>
    </div>
  );
};

export default App;
