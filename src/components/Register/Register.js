import React from "react";
import { register } from "../../services";
import { FormControl, Input } from "@mui/material";
import { FormSubmitButton } from "../../helper-copmonents";

export const Register = () => {
  const [values, setValues] = React.useState({
    age: '',
    email: '',
    gender: 'male',
    name: '',
    password: '',
    phone: '',
    surname: ''
  });

  const handleChange = (type) => (e) => {
    setValues({ ...values, [type]: e.target.value });
  };

  const genderChange = (e) => {
    setValues({ ...values, gender: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await register(values);
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
          defaultChecked
          onClick={genderChange}/>Male
      {/*</FormControl>*/}

      {/*<FormControl>*/}
        <input
          type='radio'
          name='gender'
          value='female'
          onClick={genderChange}/>Female
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
          placeholder='********'
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
