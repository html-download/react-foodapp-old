import React, {Component} from 'react';

class Selecttext  extends Component {

constructor(props){
super(props);

}

value(){
	return this.name.value;
   } 

render(){

return(
			<div className="form-group">
                <label htmlFor={this.props.name}>{this.props.title}</label>
                              <select
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange}
      className="form-select">
      <option value="">{this.props.placeholder}</option>
      {this.props.options.map( (opt) => {
        return (
          <option
            key={opt}
            value={opt}>{opt}</option>
        );
      })}
    </select>
                            </div>

    )


  }
}

export default Selecttext;