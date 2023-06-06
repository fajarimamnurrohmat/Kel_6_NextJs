import { useState } from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import styles from "@/styles/login.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika untuk memproses pengiriman formulir login
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  return (
    <>
      <Head>
        <title>LoginUser | Indah Nasgor</title>
      </Head>
      <Layout />
      <div className={styles["login-container"]}>
        <h1 className={`${styles["text-center"]} ${styles["p-4"]} ${styles["border-bottom"]} ${styles["text-uppercase"]}`}>
          Login Form
        </h1>

        <div className={`${styles["px-4"]} ${styles["pt-4"]}`}>
          <form onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className={styles["form-control"]}
                value={user.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className={styles["form-control"]}
                label="Password"
                value={user.password}
                onChange={handleChange}
                type="password"
                error={errors.password}
              />
            </div>
            <div className={`${styles["mt-4"]} ${styles["mb-2"]}`}>
              <button className={`${styles["btn"]} ${styles["btn-block"]} ${styles["btn-primary"]}`}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
