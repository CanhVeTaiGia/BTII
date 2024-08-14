// components/BaseCart.tsx
import React from "react";
import styles from "../sass/b10.module.scss";

interface BaseCartProps {
  title: string;
  content: string;
  image: string;
  children?: React.ReactNode;
}

const B10: React.FC<BaseCartProps> = ({ title, content, image, children }) => {
  return (
    <div className={styles.cart}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        {children}
      </div>
    </div>
  );
};

export default B10;
