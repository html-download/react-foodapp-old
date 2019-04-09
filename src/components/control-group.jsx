import React from 'react'; 
import PropTypes from 'prop-types'; 
import ClassName from 'classnames';

const ControlGroup = (props) =>{

  let groupClasses = ClassName(Object.assign({
      'form-group' : true
  }, props.groupClasses));

  return (
    <div className={groupClasses}>
      {props.children}
    </div>
  )
}


ControlGroup.propTypes = {  
  groupClasses: PropTypes.object
};



export default ControlGroup;