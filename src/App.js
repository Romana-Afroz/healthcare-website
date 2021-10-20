import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Header from "./component/Shared/Header/Header";
import Services from "./component/Services/Services";
import Footer from "./component/Shared/Footer/Footer";
import ServiceDetails from "./component/Services/ServiceDetails";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Blogs from "./component/Blog/Blogs";
import Doctors from "./component/Doctors/Doctors";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
