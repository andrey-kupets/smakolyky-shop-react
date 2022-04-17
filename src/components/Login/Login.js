import React from "react";
import { FormControl, Input } from '@mui/material';
import { FormSubmitButton } from "../../helper-copmonents";

export const Login = (props) => {
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (type) => (e) => {
    setValues({...values, [type]: e.target.value})
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
