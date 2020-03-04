import React from 'react'
// import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import NavBar from './common/NavBar'
import Home from './common/Home'
import TrainerIndex from './component/trainers/TrainerIndex'
import TrainerShow from './component/trainers/TrainerShow'
import Checkout from './component/trainers/Checkout'
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import ErrorPage from './common/Error'
import './styles/main.scss'

// import Checkout from './component/trainers/Checkout'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route path="/trainers/:id" component={TrainerShow} />
            <Route path="/trainers/" component={TrainerIndex} />    
            <Route exact path="/checkout" component={Checkout}/> 
            <Route exact path="/register" component={Register}/> 
            <Route exact path="/login" component={Login}/>
            <Route exact path="/*" component={ErrorPage}/>

          </Switch>
          
          </main>
        </BrowserRouter>
    )
  }
}


export default App
