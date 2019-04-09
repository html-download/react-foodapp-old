import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

class Restaurantlist extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.data;
    //id=" ";



}
render() {
    console.log("this.props", this.props);
   const id = this.state.id;

console.log("id", id);

    return(
<div class="col-sm-4">
<ReactPlaceholder color='#fff' rows={6}  delay={5000} showLoadingAnimation={true} ready={this.props.isLoaded} >
                  
                    <div class="listing wow zoomIn">
                        <div class="listing-top">
                            <div class="type"><span class="non-veg"></span></div>

                         <Link to={`/details/${id}`} class="image">

                         <img src={this.state.image_url} alt =""/> </Link>

                            <h3><a href="detail.html">{this.state.name}</a></h3>
                            <p>Western, Chinese, Indian</p>
                            <form>
                                <span class="star-rating view_only">
                                        <input  id="star-5" type="radio" name="star" />
                                        <label class="star" htmlFor="star-5"></label>
                                        <input id="star-4" type="radio"  checked  name="star" />
                                        <label class="star" htmlFor="star-4"></label>
                                        <input id="star-3" type="radio"  name="star" />
                                        <label class="star" htmlFor="star-3"></label>
                                        <input id="star-2" type="radio"   name="star" />
                                        <label class="star" htmlFor="star-2"></label>
                                        <input id="star-1" type="radio"   name="star" />
                                        <label class="star" htmlFor="star-1"></label>
                                </span>
                            </form>
                        </div>
                        <div class="listing-bottom relative full_row">
                            <span> <i class="icon-clock"></i> 20 Mins </span>
                            <span> <i class="icon-location-pin"></i> 10 Km</span>
                            <span class="active offline">Closed</span>
                        </div>
                    </div>
              
</ReactPlaceholder>
  </div>   
        );
    }

}

export default Restaurantlist;