import '../../css/login.css'
import { useForm } from "react-hook-form";


function RegisterVeiw() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email:'',
      password:''
    }
  });

  const SumitRegister = (data)=>{
    fetch('http://localhost:3020/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  return ( <div>
      <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    
    <div className='form-login'>
        <h3>Sign up</h3>
        <div>
          <label htmlFor="first_name">First name
            <input {...register("first_name", { required: true })} placeholder="first name" id="first_name"/>
          </label>

          <label htmlFor="last_name">Last name
            <input {...register("last_name", {  required: true  })}  type="text" placeholder="last name" id="last_name"/>
          </label>
        </div>
        <label htmlFor="Email">Email
          <input {...register("email", { required: true })}  type="text" placeholder="Email" id="Email"/>
        </label>

        <label htmlFor="password">Password
          <input {...register("password", {  required: true })} type="password" placeholder="Password" id="password"/>
        </label>
        <button type='submit' onClick={handleSubmit(SumitRegister)}>Sign up</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </div>
    
  </div>
  </div> );
}
export default RegisterVeiw;