import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/animate.min.css';
import './assets/css/responsive.css';


/*static components*/
import Header from './header.jsx';
import Footer from './footer.jsx';

/*dynamic components*/
import Home from './home/home.jsx';
import Listing from './list/list.jsx';
import Profile from './profile/profile.jsx';
/*import Details from './details/details.jsx';*/

const AppUniversal =  (
		
           <Router>
				<div>
				    <Route component={Header}/>
						<Switch>
								<Route path="/" exact component={Home}/>
								<Route path="/list" component={Listing}/>

								<Route path="/detail" component={Home}/>
								<Route path="/profile" component={Profile}/>
								
							</Switch> 
						<Footer />
					</div>
				</Router> 
		
		
			
	)


export default AppUniversal;