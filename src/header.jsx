import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Header extends Component{
render(){

return(

    <header className="header transparent">
        <div className="container">
            <div className="logo">
                <a href="foo.html" className="side-toggle"><i className="icon-menu"></i></a>
                <Link to="/"> <a><img src={require('./assets/img/logo.png')} className="img-responsive" alt =""/></a> </Link>
            </div>
            <div className="navigation">
                <ul>
                    <li>  <Link to="/profile">Driver Registration</Link></li>
                    <li><a href="foo.html">Partner With Us</a></li>
                    <li className="last"><a href="foo.html" data-toggle="modal" data-target="#login"><i className="icon-login"></i> Login</a></li>
                </ul>
            </div>
        </div>
    </header>



	)
  }
}

export default Header;