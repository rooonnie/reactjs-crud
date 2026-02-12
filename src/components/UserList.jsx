import { useMutation } from "@apollo/client";

import { DELETE_USER } from "../graphql/mutations.js";
import { GET_USERS } from "../graphql/queries.js";

const UserList = ({ users }) => {
  const [deleteUser, { loading: deleting, error }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleDelete = async (id) => {
    await deleteUser({ variables: { id } });
  };

  if (users.length === 0) {
    return <p className="state">No users found. Add one to get started.</p>;
  }

  return (
    <div>
      {error && (
        <p className="state state--error">{error.message}</p>
      )}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <div>
              <p className="user-card__name">{user.name}</p>
              <p className="user-card__email">{user.email}</p>
            </div>
            <button
              className="button button--danger"
              type="button"
              onClick={() => handleDelete(user.id)}
              disabled={deleting}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
