import { useState } from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import styles from "@/styles/login.module.css";
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email: user.email,
        password: user.password,
      });

      const token = response.data.token;
      // Simpan token ke penyimpanan (misalnya cookie atau localStorage)

      // Redirect ke halaman setelah login berhasil
      // Misalnya, gunakan router atau window.location.href
    } catch (error) {
      console.error(error);
      // Tangani kesalahan login (misalnya menampilkan pesan kesalahan)
    }
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
