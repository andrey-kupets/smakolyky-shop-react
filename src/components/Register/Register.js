import React from "react";
import { login } from "../../services";
import { FormControl, Input } from "@mui/material";
import { FormSubmitButton } from "../../helper-copmonents";

export const Register = () => {
  const [values, setValues] = React.useState({
    age: 0,
    email: '',
    gender: 'male',
    name: '',
    password: '',
    phone: '',
    surname: ''
  });

  const handleChange = (type) => (e) => {
    setValues({ ...values, [type]: e.target.value })
  };

  const genderChange = (e) => {
    console.log(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await login(values);
  };

  return (
    <form>
      <FormControl>
        <Input
          type='age'
          color='primary'
          placeholder='18'
          onChange={handleChange('age')}
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='email'
          color='primary'
          placeholder='example@mail.com'
          onChange={handleChange('email')}
        />
      </FormControl>
      <br/>
      {/*<FormControl>*/}
        <input
          type='radio'
          name='gender'
          value='male'
          checked onChange={genderChange}/>
        <input
          type='radio'
          name='gender'
          placeholder='female'
          onChange={genderChange}/>
      {/*</FormControl>*/}
      <br/>
      <FormControl>
        <Input
          type='text'
          color='primary'
          placeholder='Name'
          onChange={handleChange('name')}
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='password'
          color='primary'
          placeholder='Your password'
          onChange={handleChange('password')}
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='text'
          color='primary'
          placeholder='+380 67 000 00 00'
          onChange={handleChange('phone')}
        />
      </FormControl>
      <br/>
      <FormControl>
        <Input
          type='text'
          color='primary'
          placeholder='Surname'
          onChange={handleChange('surname')}
        />
      </FormControl>
      <FormSubmitButton formSubmit={formSubmit}>Register</FormSubmitButton>
    </form>
  )
}
