import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const Placeholder = (props) => {

console.log("props", props);
const{ error, isLoaded, displayrestaurant } = props; 

console.log("isLoaded", isLoaded);

if (error) {
            return <div>Error: {error.message}</div>;
        } /*else if (!isLoaded) {
            return (
                <div className="loading">loading ...</div>

            );
        }*/ else {
            return (
                <ReactPlaceholder color='#fff' rows={6} showLoadingAnimation={true}  ready={isLoaded} >
                    {displayrestaurant}
                </ReactPlaceholder> 
            );   
          // return displayrestaurant;
        }


}

{/*<ReactPlaceholder color='#000' rows={4} delay={5000} showLoadingAnimation={true} type='media' ready={!isLoaded}>
{props.displayrestaurant}
</ReactPlaceholder>*/}
export default Placeholder;