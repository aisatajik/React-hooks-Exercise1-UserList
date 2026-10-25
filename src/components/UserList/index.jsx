import UserItem from "../UserItem";
import styles from "./userList.module.scss";

function UserList({ users, onDelete }) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default UserList;
