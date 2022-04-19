import React from "react";
import { FormControl, Input } from '@mui/material';
import { FormSubmitButton } from "../../helper-copmonents";

import { login } from '../../services';

export const Login = (props) => {
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (type) => (e) => {
    setValues({ ...values, [type]: e.target.value })
  };

  const formSubmit = async () => {
    const {access_token, refresh_token} = await login(values);

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };

  return (
    <form>
      <FormControl>
        <Input
          type='email'
          color='primary'
          onChange={handleChange('email')}
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='password'
          color='primary'
          onChange={handleChange('password')}
        />
      </FormControl>
      <FormSubmitButton formSubmit={formSubmit}>Login</FormSubmitButton>
    </form>
  )
}
