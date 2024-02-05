import { useDispatch, useSelector } from "react-redux";
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"

const CreateNote = ({ handleAddNote }) => {
  const { notes, title,noteList } = useSelector((state) => state.takeNote);
  const dispatch = useDispatch();

  const notesOnChange = (e) => {
    if (200 - notes.length > 0)
      dispatch({ type: "takeInputNote", payload: e.target.value });
  };

  const titleOnChange = (e) => {
    dispatch({ type: "takeInputTitle", payload: e.target.value });
  };

  const handleSubmit = () => {
    
    if(notes.length>0){
      dispatch({ type: "addNote" });
      toast.success('Added Successfully.', {
        position: "bottom-center"
      })
    }else{
      toast.error("Nothing added!")
    }
  };

  return (
    <div className="create-note">
      <div className="note-card add">
        <input
          id="title-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleOnChange}
        />
        <textarea
          cols="10"
          rows="8"
          placeholder="Type to add a note..."
          value={notes}
          onChange={notesOnChange}
        ></textarea>
        <div className="add-footer">
          <span>{200 - notes.length} remaining</span>
          <Link to={'/'}><CgAddR onClick={handleSubmit} /></Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
