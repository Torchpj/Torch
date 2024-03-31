import React from "react";
import { IoClose } from "react-icons/io5";
import "./Todo_screen.css";

function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div className="modalex">
      <div className="modalwrap">
        <IoClose className="modalbutton" onClick={onClose} />
        <h2>Menu</h2>
        <hr />
        <div className="mc">
          <ul className="modalinside">
            <li>Edit</li>
            <li>Delete</li>
            <li>Move to</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
