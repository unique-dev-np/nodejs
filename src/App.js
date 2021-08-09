import Header from './Components/header'
import Home from './Components/home'
import About from './Components/about'
import Tools from './Components/tools'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let title = "Tourna Flex"
  return (
    <>
    <Router>
  <Header title={title}/>

  <Switch>


          <Route exact path="/" render={()=>{
            return(
              <Home title={title}/>
            )
          }}>
            </Route>
          
          <Route exact path="/about" render={()=>{
            return(
              <About/>
            )
          }}>
          </Route>

          <Route exact path="/services" render={()=>{
            return(
              
              <Tools/>
              
            )
          }}>
            </Route>

          <Route exact path="/contact" render={()=>{
            return(
              <Home/>
            )
          }}>
            
          </Route>
  </Switch>



    </Router>
    </>
  );
}

export default App;
