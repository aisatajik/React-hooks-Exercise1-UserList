import { useEffect, useState } from "react";
import { fetchUsers } from "../services/usersApi";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import Message from "../components/Message";
import styles from "./app.module.scss";

function App() {
  // The users list is stored as a simple array in useState
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load the initial users from the API when the page loads
  useEffect(() => {
    let ignore = false;

    async function loadUsers() {
      try {
        const data = await fetchUsers();
        if (!ignore) setUsers(data);
      } catch (err) {
        if (!ignore) {
          setError(
            err instanceof TypeError
              ? "Could not connect to the server. Please check your internet connection or VPN."
              : err.message
          );
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadUsers();
    return () => {
      ignore = true;
    };
  }, []);

  // Add a new user to the end of the list
  const handleAddUser = ({ name, email }) => {
    const newUser = { id: Date.now(), name, email };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Remove a user by id
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Users List</h1>

      <UserForm onAdd={handleAddUser} />

      {loading && <Message>Loading users...</Message>}
      {error && <Message variant="error">{error}</Message>}
      {!loading && !error && users.length === 0 && (
        <Message>No users found.</Message>
      )}

      <UserList users={users} onDelete={handleDeleteUser} />
    </main>
  );
}

export default App;
