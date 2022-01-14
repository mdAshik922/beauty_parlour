
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Create from './Components/Pages/UserAcount/CreateAccount/Create';
import Footer from './Components/Pages/Footer/Footer';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Pages/UserAcount/Login/Login';
import Header from './Components/Pages/Header/Header';
import Appointment from './Components/Appointment/Appointment';
import PrvateRoute from './Components/PrivateRoute/PrvateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
   <Router>
   <Header></Header>
     <Switch>
       <Route exact path="/">  <Home></Home> </Route>

       <Route  path="/home">  <Home></Home>   </Route>

       <PrvateRoute  path="/appointment">  <Appointment></Appointment>  </PrvateRoute>

       <Route  path="/create"> <Create></Create>     </Route>

       <Route  path="/login"> <Login></Login>   </Route>

     </Switch>
     <Footer></Footer>
   </Router>
</AuthProvider>
    </div>
  );
}

export default App;
