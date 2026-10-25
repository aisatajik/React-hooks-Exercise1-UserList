import { useState } from "react";
import styles from "./userForm.module.scss";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      setError("Please enter both name and email.");
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    onAdd({ name: trimmedName, email: trimmedEmail });
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Add User
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}

export default UserForm;
