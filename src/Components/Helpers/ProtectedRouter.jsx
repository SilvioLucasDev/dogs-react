import React from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  }
  return <></>;
};

export default ProtectedRouter;
