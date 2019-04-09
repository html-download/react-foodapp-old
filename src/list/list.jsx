import React, {Component} from 'react';
import Placeholder from '../components/placeholder.jsx';
import Restaurantlist from './reslist';

class List extends Component{

   constructor(props) {
    super(props);
    this.state ={
       restaurants:[],
        error: null,
      isLoaded: false,
    };
   }



componentDidMount()
    {
        fetch(' https://opentable.herokuapp.com/api/restaurants?state=IL').then((Response) => Response.json()).then((findresponse) =>
            {
                this.setState({
                isLoaded: true,
                restaurants : findresponse.restaurants

            })
                    
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }

        )


 }

render(){    

      const displayrestaurant = this.state.restaurants.map((restaurants) => {
                   return (<Restaurantlist  {...this.state} data={restaurants}/>)
})

return(
<div>
    <section className="fav-restaurant">
        <div className="container">

            <h2>Featured Restaurants</h2>
            
            


                <div className="row">
                    <div className="col-sm-4">
                        <div className="listing wow zoomIn">
                            <div className="listing-top">
                                <div className="type"><span className="veg"></span><span className="non-veg"></span></div>
                                <a href="detail.html" className="image"><img src={require('../assets/img/re1.png')} alt =""/> </a>
                                <h3><a href="detail.html">Eat More</a></h3>
                                <p>Western, Chinese, Indian</p>
                                <form>
                                    <span className="star-rating view_only">
                                            <input  id="star-5" type="radio" name="star" />
                                            <label className="star" htmlhtmlFor="star-5"></label>
                                            <input id="star-4" type="radio"  checked  name="star" />
                                            <label className="star" htmlhtmlFor="star-4"></label>
                                            <input id="star-3" type="radio"  name="star" />
                                            <label className="star" htmlhtmlFor="star-3"></label>
                                            <input id="star-2" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-2"></label>
                                            <input id="star-1" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-1"></label>
                                    </span>

                                </form>
                            </div>
                            <div className="listing-bottom relative full_row">
                                <span> <i className="icon-clock"></i> 20 Mins </span>
                                <span> <i className="icon-location-pin"></i> 10 Km</span>
                                <span className="active">Open</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="listing wow zoomIn">
                            <div className="listing-top">
                                <div className="type"><span className="non-veg"></span></div>
                                <a href="detail.html" className="image"><img src={require('../assets/img/re2.png')} alt =""/> </a>
                                <h3><a href="detail.html">Pastamasta Taste Food</a></h3>
                                <p>Western, Chinese, Indian</p>

                                <a href="foo.html" data-toggle="modal" className="ratings-popup-listing" data-target="#ratings-add">
                                <form>
                                    <span className="star-rating view_only">
                                            <input  id="star-5" type="radio" name="star" />
                                            <label className="star" htmlhtmlFor="star-5"></label>
                                            <input id="star-4" type="radio"  checked  name="star" />
                                            <label className="star" htmlhtmlFor="star-4"></label>
                                            <input id="star-3" type="radio"  name="star" />
                                            <label className="star" htmlhtmlFor="star-3"></label>
                                            <input id="star-2" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-2"></label>
                                            <input id="star-1" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-1"></label>
                                    </span>
                                </form>
                                <span className="numbr-count">( 25 Reviews )</span>
                                </a>

                            </div>
                            <div className="listing-bottom relative full_row">
                                <span> <i className="icon-clock"></i> 20 Mins </span>
                                <span> <i className="icon-location-pin"></i> 10 Km</span>
                                <span className="active offline">Closed</span>
                                <button className="fav-button-add" data-toggle="tooltip" title="Add Favourite"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="listing wow zoomIn">
                            <div className="listing-top">
                                <div className="type"><span className="veg"></span><span className="non-veg"></span></div>
                                <a href="detail.html" className="image"><img src={require('../assets/img/re3.png')} alt =""/> </a>
                                <h3><a href="detail.html">Hot Pot Restaurants</a></h3>
                                <p>Western, Chinese, Indian</p>

                                <form>
                                    <span className="star-rating view_only">
                                            <input  id="star-5" type="radio" name="star" />
                                            <label className="star" htmlhtmlFor="star-5"></label>
                                            <input id="star-4" type="radio"  checked  name="star" />
                                            <label className="star" htmlhtmlFor="star-4"></label>
                                            <input id="star-3" type="radio"  name="star" />
                                            <label className="star" htmlhtmlFor="star-3"></label>
                                            <input id="star-2" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-2"></label>
                                            <input id="star-1" type="radio"   name="star" />
                                            <label className="star" htmlhtmlFor="star-1"></label>
                                    </span>

                                </form>

                            </div>
                            <div className="listing-bottom relative full_row">
                                <span> <i className="icon-clock"></i> 20 Mins </span>
                                <span> <i className="icon-location-pin"></i> 10 Km</span>
                                <span className="active">Open</span>
                            </div>
                        </div>
                    </div>

                </div>
            
        </div>
    </section>

    <section className="listing-restaurant-filters">
        <div className="container d-table">
            <div className="d-table-cell"><span>(75)</span> Restaurant Found</div>
            
            <div className="d-table-cell text-right"> <a href="#filter" data-toggle="modal" data-target="#filter"><i className="icon-equalizer"></i> Filter Restaurant</a></div>
        </div>
    </section>

    <section className="grey-restaurant">
        <div className="container">

            <div className="row mb20">
                <div className="col-md-12">
                    <button className="tags wow zoomIn"> Indian <span>&times;</span> </button>
                    <button className="tags wow zoomIn"> Chinese <span>&times;</span> </button>
                    <button className="tags wow zoomIn"> Arabian <span>&times;</span> </button>
                    <a href="foo.html" className="clearall wow zoomIn">Clear All</a>
                </div>
            </div>

            <div className="row">
               
        <Placeholder 
            error={this.state.error}
            isLoaded={this.state.isLoaded}
            displayrestaurant={displayrestaurant}
            />

            </div>

            <div className="text-center">
                <a href="foo.html" className="btn loadmore loader wow zoomIn upper"> Load More </a>
            </div>

        </div>
    </section>
</div>
    )
    }
   }

export default List; 