import { useState } from 'react';
import Layout from '@/component/Layout';
import styles from '@/styles/signin.module.css'
import Head from 'next/head';
import connectDB from '@/mongoConfig'
import User from './api/user'; 

connectDB();

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, password_confirm } = user;
    const userData = { name, email, password };

    try {
      const savedUser = await User.create(userData);
      console.log('User saved successfully:', savedUser);
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  };

  

  return (
    <>
      <Head><title>Registrasi | Indah Nasgor</title></Head>
      <Layout />
      <div className={styles['register-container']}>
        <h1 className={`${styles['text-center']} ${styles['p-4']} ${styles['border-bottom']} ${styles['text-uppercase']}`}>Register Form</h1>

        <div className={`${styles['px-4']} ${styles['pt-4']}`}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors['name'] ? 'is-invalid' : ''}`}
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <div className="invalid-feedback">{errors['name']}</div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors['email'] ? 'is-invalid' : ''}`}
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <div className="invalid-feedback">{errors['email']}</div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${errors['password'] ? 'is-invalid' : ''}`}
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <div className="invalid-feedback">{errors['password']}</div>
            </div>

            <div className="form-group">
              <label htmlFor="password-confirm">Password Confirmation</label>
              <input
                type="password"
                className={`form-control ${errors['password_confirm'] ? 'is-invalid' : ''}`}
                id="password-confirm"
                value={user.password_confirm}
                onChange={(e) => setUser({ ...user, password_confirm: e.target.value })}
              />
              <div className="invalid-feedback">{errors['password_confirm']}</div>
            </div>

            <div className="mt-4 mb-2">
              <button type="submit" className="btn btn-block btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
