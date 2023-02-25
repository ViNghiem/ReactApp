
// import Home from '../Pages/Home'

import { LoginPage } from '../Pages'
import { RegisterPage ,AuthZalo} from '../Pages'
// import Admin from '../AdminVeiw/Admin'


const publiccRouter =[
 
  {path:'/',component:LoginPage},
  {path:'/Login',component:LoginPage},
  {path:'/success',component:AuthZalo},
  {path:'/register',component:RegisterPage}

]

// const privateRouter=[
//   {path:'/admin',component:Admin},
// ]

export{
  publiccRouter,
  // privateRouter
}