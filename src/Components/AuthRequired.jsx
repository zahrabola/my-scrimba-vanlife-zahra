import React from 'react';
import { Outlet, Navigate } from "react-router-dom"

const AuthRequired = () => {

    const authenticated = false /* false - host hide, true  - host works */
  if(!authenticated) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}

export default AuthRequired;
