import React from 'react';
import { Button } from '@mui/material';

export const FormSubmitButton = ({ children }) => {
  return(
    <Button
      type='submit'
      color='primary'
    >
      {children}
    </Button>
  )
};
