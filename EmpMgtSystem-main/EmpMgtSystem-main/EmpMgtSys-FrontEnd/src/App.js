import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent'; 
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ViewEmployeePersonalComponent from './components/ViewEmployeePersonalComponent';
import ViewEmployeeProfessionalComponent from './components/ViewEmployeeProfessionalComponent';
import ViewEmployeeFinanceComponent from './components/ViewEmployeeFinanceComponent';
import ViewAdminFinanceComponent from './components/ViewAdminFinanceComponent'; 
import ViewAdminComponent from './components/ViewAdminComponent';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              {/* <Route exact path = "/" component = {Login}></Route> */}
              <Route exact path = "/" component = {ListEmployeeComponent}></Route>  

              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent}></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
              <Route path = "/view-admin/:id" component = {ViewAdminComponent}></Route>
              <Route path = "/view-employee-personal/:id" component = {ViewEmployeePersonalComponent}></Route>
              <Route path = "/view-employee-professional/:id" component = {ViewEmployeeProfessionalComponent}></Route>
              <Route path = "/view-employee-finance/:id" component = {ViewEmployeeFinanceComponent}></Route>
              <Route path = "/view-admin-finance/:id" component = {ViewAdminFinanceComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;