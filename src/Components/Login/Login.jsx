import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecovery from './LoginRecovery';
import LoginRestart from './LoginRestart';
import { UserContext } from '../../Contexts/UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) navigate('/conta');

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginRecovery />} />
          <Route path="resetar" element={<LoginRestart />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
