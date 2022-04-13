import React from "react";
import { FormControl, Input } from '@mui/material';

export const Login = (props) => {
  return (
    <div>
      <FormControl>
        <Input
          type='email'
          color='primary'
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='password'
          color='primary'
        />
      </FormControl>
    </div>
  )
}
