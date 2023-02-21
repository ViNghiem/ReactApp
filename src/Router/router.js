
// import Home from '../Pages/Home'

import Login from '../Pages/Login'
import Register from '../Pages/Register'
// import Admin from '../AdminVeiw/Admin'


const publiccRouter =[
 
  {path:'/',component:Login},
  {path:'/Login',component:Login},
 
  {path:'/register',component:Register}

]

// const privateRouter=[
//   {path:'/admin',component:Admin},
// ]

export{
  publiccRouter,
  // privateRouter
}