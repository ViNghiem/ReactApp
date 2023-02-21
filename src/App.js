
import './App.css'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {publiccRouter} from './Router/router'
import Defaulayout from './Layout/Defaulayout';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log("SAdasw user",user)
  return (
    <Router>
    <div className="App">
      <Routes>

      if(user){
        console.log("SAdas",user)
      }else{
        console.log("SAdasw",user)
      }

        
        {publiccRouter.map((router,index) => {
          const Layout = router.layout || Defaulayout;
          const Page = router.component;
          return (
            <Route key={index} path={router.path} element ={
              <Layout >
                <Page/>
              </Layout>
            }/>
          )
        })
        }
      </Routes>
    </div>
    </Router>
  );
}

export default App;
