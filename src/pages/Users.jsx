import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/queries.js";
import UserList from "../components/UserList.jsx";
import AddUserForm from "../components/AddUserForm.jsx";

const Users = () => {
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <section className="users">
      <div className="users__grid">
        <div className="users__panel">
          <h2 className="users__title">Add user</h2>
          <AddUserForm onSuccess={refetch} />
        </div>
        <div className="users__panel">
          <div className="users__panel-header">
            <h2 className="users__title">All users</h2>
            <button
              className="button button--ghost"
              type="button"
              onClick={() => refetch()}
              disabled={loading}
            >
              Refresh
            </button>
          </div>
          {loading && <p className="state">Loading users...</p>}
          {error && (
            <p className="state state--error">{error.message}</p>
          )}
          {!loading && !error && (
            <UserList users={data?.users ?? []} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Users;
