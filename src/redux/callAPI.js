
import {loginStart,loginSuccess,loginFail} from "./authSlice"

export const LoginUser = async (user,dispatch,navigate) =>{
    dispatch(loginStart());
  try {
     fetch('http://localhost:3020/user/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
       dispatch(loginSuccess(data))
        navigate('/admin')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } catch (error) {
    dispatch(loginFail())
  }
}