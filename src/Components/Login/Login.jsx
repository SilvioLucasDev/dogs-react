import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecovery from './LoginRecovery';
import LoginRestart from './LoginRestart';
import React from 'react';
import { UserContext } from '../../Contexts/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) navigate('/conta');

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="recuperar" element={<LoginRecovery />} />
        <Route path="resetar" element={<LoginRestart />} />
      </Routes>
    </div>
  );
};

export default Login;
