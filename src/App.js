import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/listuser" component={UserList}></Route>
          <Route path="/adduser" component={AddUser}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
