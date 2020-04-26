import React from "react";

const alert = props => {
  console.log(props);
  return (
    <div className={`alert alert-${props.alert.type}`}>
      <i className="fas fa-info-circle" /> {props.alert.msg}
    </div>
  );
};

export default alert;
