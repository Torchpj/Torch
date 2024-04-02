import React from "react";
import { IoClose } from "react-icons/io5";
import "./Todo_screen.css";

function Modal({ onClose, onEdit, onDelete }) {
  const handleClose = () => {
    onClose?.();
  };
  const handleEdit = () => {
    onEdit?.();
  };
  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <div className="modalex">
      <div className="modalwrap">
        <IoClose className="modalbutton" onClick={handleClose} />
        <h2>Menu</h2>
        <hr />
        <div className="mc">
          <ul className="modalinside">
            <li onClick={handleEdit} className="cur">
              Edit
            </li>
            <li onClick={handleDelete} className="cur">
              Delete
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
