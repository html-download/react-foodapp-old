import React, {Component} from 'react';

import ClassName from 'classnames';
import ControlGroup from '../components/control-group.jsx';

class Inputtext extends Component {

constructor(props){
super(props);

}


value(){
	return this.name.value;
   } 



render(){

return(

		<ControlGroup groupClasses={this.props.groupClasses}>
                        <label>{this.props.name}</label>
                        <input 
                        ref={(c) => (this.name = c)}
                        className={this.props.className}
                        name={this.props.name}
                        type={this.props.type}
                        value={this.props.value}
                        onChange={this.props.onChange}
                         />
      </ControlGroup>           



    )


  }

}

export default Inputtext;