import React, {Component} from 'react';

import '../assets/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import GoogleSuggest from '../components/googlesuggest'

class Home extends Component{

    constructor(){
        super()
        this.state = {
            'loading' : false,
            'address' : ''
        };
        this.getAutocompleteAddress  = this.getAutocompleteAddress.bind(this);
    }

    getAutocompleteAddress (address){
        this.setState({address:address});
        
console.log("address", address);
    }
render(){    

return(
<div>

    <section className="banner text-center">
        
        <div className="container">
            <div className="table-cell verticle-center">
                <h1 className="wow fadeInDown">Indulge your tastebuds with <b>Food</b></h1>

             

                <form className="location-form wow fadeInUp" action="listing.html" onSubmit={this.createReportLocation} >
                
                    <div className="form-icon">
                 
                      {/*<input type="text" id="location" placeholder="Enter Your Location" onChange={this.handleInputChange}/>*/}
                      <GoogleSuggest 
                        funtionName={this.getAutocompleteAddress}
                        loading={this.state.loading}
                      />
                      
                        <i className="icon-location-pin"></i>
                    </div>
                    <div className="form-search">
                        <Link to="/list"><button className="btn btn-primary loader">   <i className="fa fa-search"></i> Find Food</button></Link>
                    </div>
                </form>
                <div className="download-apps">
                    <h3 className="wow fadeInUp">Download Apps</h3>
                    <a href="foo.html" target="_blank" className="wow fadeInUp"><img src={require('../assets/img/google.png')} alt =""/></a>
                    <a href="foo.html" target="_blank" className="wow fadeInUp"><img src={require('../assets/img/ios.png')} alt =""/></a>
                </div>
            </div>
        </div>
    </section>

    <section className="pattern fadeInUp wow">
        <div className="container">
            <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                    <img src={require('../assets/img/how1.png')} alt =""/>
                    <h3>Choose Location</h3>
                    <p>User can specify cuisine and search for such restaurants in your locality</p>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1.4s">
                    <img src={require('../assets/img/how2.png')} alt =""/>
                    <h3>Choose Restaurant</h3>
                    <p>User can specify cuisine and search for such restaurants in your locality</p>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1.8s">
                    <img src={require('../assets/img/how3.png')} alt =""/>
                    <h3>Choose Menu</h3>
                    <p>Browse hundreds of menus to find the food you like</p>
                </li>
                <li className="wow fadeInUp" data-wow-duration="2s">
                    <img src={require('../assets/img/how4.png')} alt =""/>
                    <h3>Order & Get Delivered</h3>
                    <p>Food is prepared & delivered to your door</p>
                </li>
            </ul>
        </div>
    </section>

    <section className="mobile-app wow fadeInUp">
        <div className="container">
            <h2 className="text-center wow fadeInUp">Restaurants in Your Pocket</h2>
            <p className="sub-heading wow fadeInUp text-center">Order from your favorite restaurants & track on the go, with the all-new TabaoGo app.</p>
            <div className="row">
                <div className="col-md-4">
                    <ul className="wow fadeInLeft">
                        <li>
                            <i className="icon-login"></i>
                            <h3>Register / Login</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                        <li>
                            <i className="icon-list"></i>
                            <h3>Restaurant Listing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                        <li>
                            <i className="icon-handbag"></i>
                            <h3>Menu Listing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-center">
                    <img src={require('../assets/img/Food.png')} className="img-responsive wow fadeInUp" alt =""/>
                    <div className="apps-logo">
                        <a href="foo.html" target="_blank" className="wow fadeInUp"><img src={require('../assets/img/google.png')} alt =""/></a>
                        <a href="foo.html" target="_blank" className="wow fadeInUp"><img src={require('../assets/img/ios.png')} alt =""/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul className="right-side wow fadeInRight">
                        <li>
                            <i className="icon-basket"></i>
                            <h3>My Cart</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                        <li>
                            <i className="icon-action-redo"></i>
                            <h3>Checkout</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                        <li>
                            <i className="icon-bell"></i>
                            <h3>Order Status</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt neque mauris.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</div>
   


        );
    }
}

export default Home;