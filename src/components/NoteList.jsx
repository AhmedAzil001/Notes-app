import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const NoteList = () => {
  const dispatch = useDispatch();

  const { noteList, searchList } = useSelector((state) => state.takeNote);

  const handleSearch = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  const emptySearh = () => dispatch({ type: "search", payload: "" });

  useEffect(() => {
    emptySearh();
  }, []);

  return (
    <div className="list-container">
      {noteList.length === 0 ? (
        <h1>No note added</h1>
      ) : (
        <>
          <input
            id="search-input"
            type="text"
            placeholder="Enter note title to search"
            onChange={handleSearch}
          />
          <div className="note-list">
            {(searchList.length === 0 ? noteList : searchList).map((note) => (
              <NoteCard
                key={note.id}
                note={note.note}
                date={note.date}
                id={note.id}
                title={note.title}
              />
            ))}
          </div>
        </>
      )}
      
    </div>
  );
};

export default NoteList;
