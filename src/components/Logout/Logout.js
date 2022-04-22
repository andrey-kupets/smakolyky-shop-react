import React, { useEffect } from "react";
// import { logout } from "../../services";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();

  const out = async () => {
    // await logout(); // for back endpoint TODO
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    history.push('/');
  }
  useEffect(() => {
    out();
  },[])

  return (
    <div>
      Logout
    </div>
  )
}
