import React from "react";
import { Link } from "react-router-dom";

import './HeaderBlock.css';

export const HeaderBlock = () => {
  return (
    <div className={'main-button'}>
      <div>
        <Link to='/login'>
          go to login
        </Link>
      </div>
      <div>
        <Link to='/register'>
          go to register
        </Link>
      </div>
    </div>
  )
}
