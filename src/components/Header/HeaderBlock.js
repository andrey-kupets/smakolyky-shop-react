import React from "react";
import { Link } from "react-router-dom";

import './HeaderBlock.css';

export const HeaderBlock = () => {
  const isLogged = localStorage.getItem('access_token');

  return (
    <div>
      {!isLogged &&
        <Link to='/login' className={'main-button'}>
          go to login
        </Link>
      }
      {/*{!!isLogged &&*/}
        <Link to='/register' className={'main-button'}>
          go to register
        </Link>
      {/*}*/}
      {!!isLogged &&
        <Link to='/logout' className={'main-button'}>
          logout
        </Link>
      }
    </div>
  )
}
