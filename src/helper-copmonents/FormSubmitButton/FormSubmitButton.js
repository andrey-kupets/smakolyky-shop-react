import React from 'react';
import { Button } from '@mui/material';

export const FormSubmitButton = ({ children, formSubmit }) => {
  return(
    <Button
      type='submit'
      color='primary'
      onClick={formSubmit}
    >
      {children}
    </Button>
  )
};
