import '../../css/login.css';

import { useState } from "react";
import {LoginUser} from "../../redux/callAPI"
import{useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';

function LoginVeiw() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("")
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handlelLogin = (e) =>{
    e.preventDefault();
    const neuUser = {
      email:email,
      password:password,
    }
    LoginUser(neuUser,dispatch,navigate)
  }
 
  return ( 
  <div className='box-login-form'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handlelLogin}>
    <div className='form-login'>
        <h3>Login Here</h3>

        <label htmlFor="username">Username
          <input type="text" placeholder="Email or Phone" id="username"  onChange={(e)=>setEmail(e.target.value)}  />
        </label>
          <label htmlFor="password">Password
        <input type="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}  />
        </label>
        <button >Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </div>
    </form>
  </div>
  );
}

export default LoginVeiw;