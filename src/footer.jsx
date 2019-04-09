import React, { Component } from 'react';

class Footer extends Component {
render(){
return(

	
    <footer>
        <div className="container">
            <ul className="footer-top">
                <li>
                    <a href="/" className="fadeInUp wow"><img src={require('./assets/img/white-logo.png')} alt =""/></a>
                </li>
                <li>
                    <div className="social-icons fadeInUp wow">
                        <a href="foo.html"><i className="fa fa-facebook"></i></a>
                        <a href="foo.html"><i className="fa fa-twitter"></i></a>
                        <a href="foo.html"><i className="fa fa-google-plus"></i></a>
                        <a href="foo.html"><i className="fa fa-linkedin"></i></a>
                    </div>
                </li>
                <li>
                    <select className="custom-select fadeInUp wow">
                        <option>English</option>
                        <option>Norwegian</option>
                    </select>
                </li>
            </ul>
            <ul className="quicklinks fadeInUp wow">
                <li><a href="foo.html">About us</a></li>
                <li><a href="foo.html">Privacy Policy</a></li>
                <li><a href="foo.html">Terms and Conditions </a></li>
                <li><a href="foo.html">Driver Registration</a></li>
                <li><a href="foo.html">How It Works</a></li>
                <li><a href="foo.html">FAQ </a></li>
                <li><a href="foo.html">Contact us</a></li>
            </ul>
            <p className="text-center fadeInUp wow copyrights">© Copyright Food 2018 | All Rights Reserved</p>
        </div>
    </footer>

		)
	}
}

export default Footer;