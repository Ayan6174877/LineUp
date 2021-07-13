import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ReorderIcon from "@material-ui/icons/Reorder";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import "../styles/header.css";

export default function Header(props) {
  return (
    <div className="header-top">
      <div class="left-section">
        <span className="Logo-text">
          Line<i className="color-red">Up</i>
        </span>
      </div>
      <div class="middle-section">
        <TextField
          id="filled-basic"
          className="search-input"
          label="Search a task"
        />
      </div>
      <div class="right-section">
        <Avatar className="avatar-color">
          {props.username.substring(0, 1)}
        </Avatar>
        <p className="username">
          Hello, <br></br>
          {props.username}
        </p>
      </div>
    </div>
  );
}
