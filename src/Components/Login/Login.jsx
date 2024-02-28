import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecovery from './LoginRecovery';
import LoginRestart from './LoginRestart';

const Login = () => {
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
