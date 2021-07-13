import React from "react";
import "../styles/listnavigation.css";

function NavigationItems(props) {
  return (
    <div className="navigation-listitems">
      <p class="navigation-title"> {props.navigationtitle} </p>
      <span class={`total-task ${props.cname}`}>{props.total}</span>
    </div>
  );
}

export default NavigationItems;
