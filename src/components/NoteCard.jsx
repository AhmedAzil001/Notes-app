import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"

const NoteCard = ({ id, note, date, title }) => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.takeNote);

  const handleDelete = (id) => {
    dispatch( {type:"deletNote" , payload:id})
    toast.success('Deleted Successfully.', {
      position: "bottom-center"
    })
  };

  const handleEdit = (id) => {
    edit &&
      dispatch({
        type: "editNote",
        payload: id,
      });
  };

  return (
    <div className="note-card">
      <div className="note-section">
        {title.length===0? <h5>Title</h5> : <h5>{title}</h5>}
        <p>{note}</p>
      </div>
      <div className="note-footer">
        <span>{date}</span>
        <div className="note-btn">
          <MdOutlineDeleteOutline onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
