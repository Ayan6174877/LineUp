import React, { useState } from "react";
import "../styles/listnavigation.css";
import NavigationItems from "./NavigationItems";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddTask from "./AddTask";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";

function ListNavigation() {
  const tasksArray = useSelector((state) => state.taskReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [navigationState, setNavigationState] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "solid 1px rgba(0,0,0,.12)",
      borderRadius: "5px",
      boxShadow: "0 0 10px 0 rgba(0,0,0,.12)",
      padding: "0",
      zIndex: "100",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        ClassName="modal"
      >
        <AddTask />
        <CancelIcon className="close-modal-btn" onClick={closeModal} />
      </Modal>

      <div className={`list-navigation ${navigationState} `}>
        <div className="navigation-items">
          <span className="create-task-button" onClick={openModal}>
            <span>Create task</span>
            <span className="add-icon">
              <AddIcon />
            </span>
          </span>
          <NavLink exact to="/tasks" activeClassName="active-nav">
            <NavigationItems
              navigationtitle="All tasks"
              total={`${tasksArray.length}`}
            />
          </NavLink>
          <NavLink exact to="/tasks/work" activeClassName="active-nav">
            <NavigationItems
              navigationtitle="Work"
              total={`${
                tasksArray.filter((tasks) => tasks.category === "Work").length
              }`}
            />
          </NavLink>
          <NavLink exact to="/tasks/personal" activeClassName="active-nav">
            <NavigationItems
              navigationtitle="Personal"
              total={`${
                tasksArray.filter((tasks) => tasks.category === "personal")
                  .length
              }`}
            />
          </NavLink>
          <NavLink exact to="/tasks/completed" activeClassName="active-nav">
            <NavigationItems
              navigationtitle="Completed"
              total={`${
                tasksArray.filter((tasks) => tasks.completed === true).length
              }`}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ListNavigation;
