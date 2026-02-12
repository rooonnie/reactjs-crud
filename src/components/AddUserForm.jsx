import { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations.js";
import { GET_USERS } from "../graphql/queries.js";

const initialForm = {
  name: "",
  email: "",
};

const AddUserForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialForm);
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      return;
    }

    await createUser({
      variables: {
        name: form.name.trim(),
        email: form.email.trim(),
      },
    });

    setForm(initialForm);
    onSuccess?.();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__field">
        <span>Name</span>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Jane Doe"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </label>
      <label className="form__field">
        <span>Email</span>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </label>
      {error && (
        <p className="state state--error">{error.message}</p>
      )}
      <button className="button" type="submit" disabled={loading}>
        {loading ? "Saving..." : "Add user"}
      </button>
    </form>
  );
};

export default AddUserForm;
