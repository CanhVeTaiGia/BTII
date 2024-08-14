import React from "react";
import styles from "../sass/b5.module.scss";

export default function B5() {
  return (
    <>
      <h2>Bài 5</h2>
      <div className={styles["delete-notification"]}>
        <div className={styles.icon}>
          <span>⚠️</span>
        </div>
        <h2>Delete blog post</h2>
        <p>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <div className={styles.buttons}>
          <button className={styles["cancel-button"]}>Cancel</button>
          <button className={styles["delete-button"]}>Delete</button>
        </div>
      </div>
    </>
  );
}
