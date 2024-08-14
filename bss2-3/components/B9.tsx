import React from "react";
import styles from "../moduleCSS/b9.module.css";

type AlertType = "success" | "error" | "warning";

interface BaseAlertProps {
  type: AlertType;
  message: string;
}

const B9: React.FC<BaseAlertProps> = ({ type, message }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
};

export default B9;
