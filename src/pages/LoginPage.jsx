import React, { useState } from 'react'
import UseAunth from '../hooks/UseAunth.JS'
import { useForm } from 'react-hook-form'
import UserLogged from '../components/LoginPage/UserLogged.jsx'

const loginPage = () => {

  const[ user, setUser] = useState(JSON.parse(localStorage.getItem ('user')));


  const {register, handleSubmit,reset } = useForm();

  const {loginUser }  = UseAunth ()


  const submit = data => {
    loginUser (data)
    reset({
      email: '',
      password: ''
    })
  }

  if(localStorage.getItem('token')) {
    return< UserLogged setUser={setUser} user={user}/>;

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type= "email" id="" />
        </label>
        <label>
          <span>password</span>
          <input {...register('password')} type= "password" id="" />
        </label>
        <button>submit</button>
      </form>

    </div>
  )
}

export default loginPage