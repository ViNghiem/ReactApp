import '../../css/login.css';
import sha256 from 'sha256';
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

  const makeid = () =>{
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    for(let i=0; i < 43; i++ ){  
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }

  function hexToBase64(hexstring) {
    let code = btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join(""));
  
    return code.replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  }

 
  const handeleZalo = ()=>{
    var code_verifier = makeid
    var code_challenge = hexToBase64(sha256(code_verifier))
    var link = `https://oauth.zaloapp.com/v4/permission?app_id=456333988957607221&redirect_uri=https://react-app-gray-alpha.vercel.app/success&code_challenge=${code_challenge}&state=yes`

    window.open(link)
  }


  return ( 
  <div className='box-login-form'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
   
    <div className='form-login'>
        <h3>Login Here</h3>
        <form onSubmit={handlelLogin}>
        <label htmlFor="username">Username
          <input type="text" placeholder="Email or Phone" id="username"  onChange={(e)=>setEmail(e.target.value)}  />
        </label>
          <label htmlFor="password">Password
        <input type="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}  />
        </label>
        <button >Log In</button>
        </form>
        <div className="social">
          <div className="go" onClick={handeleZalo}><i className="fab fa-google"></i>  Zalo</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </div>
   
  </div>
  );
}

export default LoginVeiw;