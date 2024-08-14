import React from "react";
import styles from "../moduleCSS/b7.module.css";

const B7 = ({ type = "primary", children, ...props }: any) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} {...props}>
      {children}
    </button>
  );
};

export default B7;
