import styles from "../moduleCSS/FormLogin.module.css";

export default function B4() {
  return (
    <>
      <h2>Bài 4</h2>
      <form className={styles.form}>
        <h1 className={styles.title}>Form Sign up</h1>

        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@company.com"
          className={styles.input}
        />

        <label htmlFor="phone" className={styles.label}>
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+84 (123) 456-789"
          className={styles.input}
        />

        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <textarea
          id="address"
          name="address"
          className={styles.textarea}
        ></textarea>

        <div className={styles.skillGroup}>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="html"
            />{" "}
            HTML
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="javascript"
            />{" "}
            JavaScript
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="ux"
            />{" "}
            UX design
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="reactjs"
            />{" "}
            ReactJS
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="css"
            />{" "}
            CSS
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="skills"
              value="java"
            />{" "}
            Java
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Sign up
        </button>
      </form>
    </>
  );
}
