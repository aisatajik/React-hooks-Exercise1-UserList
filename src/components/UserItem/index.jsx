import styles from "./userItem.module.scss";

function UserItem({ user, onDelete }) {
  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <strong className={styles.name}>{user.name}</strong>
        <span className={styles.email}>{user.email}</span>
      </div>
      <button className={styles.delete} onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </li>
  );
}

export default UserItem;
