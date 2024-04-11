import { useForm } from "react-hook-form"
import UseAunth from "../hooks/UseAunth.JS"

const RegisterPage = () => {


   const { register, handleSubmit, reset} = useForm ()

   const {registerUser} = UseAunth()


   const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })

   


  }


  return (
    <div>
      <form onSubmit={handleSubmit (submit)}>
        <h2>Register</h2>
        <label>
          <span>First Name</span>
          <input {...register('firstName')}type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')}type="password" />
        </label>
        <label>
          <span>Gender</span>
          <select {...register('gender')}>
            <option value='unknown'>Unknown</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>I prefer don't say it</option>

          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
