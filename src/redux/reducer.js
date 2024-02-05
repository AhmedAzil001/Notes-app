import { createAction, createReducer } from "@reduxjs/toolkit";
const getInputNote = createAction("takeInputNote");
const getInputTitle = createAction("takeInputTitle");
const newNote = createAction("addNote");
const deleteNote = createAction("deletNote");
const editNote = createAction("editNote");
const search = createAction("search");


export const noteReducer = createReducer(
  {
    noteList: [],
    newNote: {},
    title: "",
    notes: "",
    id: 0,
    searchList: [],
  },
  (builder) => {
    builder
      .addCase(getInputNote, (state, action) => {
        state.notes = action.payload;
      })
      .addCase(getInputTitle, (state, action) => {
        state.title = action.payload;
      })
      .addCase(newNote, (state, action) => {
        if (state.notes.length > 0) {
          state.id += 1;
          console.log(`${action.payload} ${state.id}`);
          state.newNote["title"] = state.title;
          state.newNote["id"] = state.id;
          state.newNote["note"] = state.notes;
          state.newNote["date"] = new Date().toLocaleDateString();
          state.noteList.unshift(state.newNote);
          state.notes = "";
          state.title = "";
          state.newNote={};
        }
      })
      .addCase(deleteNote, (state, action) => {
        const id = action.payload;

        state.noteList = state.noteList.filter((note) => {
          return note.id !== id;
        });
        if(state.noteList.length===0) state.id=0;
      })
      .addCase(editNote, (state, action) => {
        console.log(action.payload);
      })
      .addCase(search, (state, action) => {
        if (action.payload !== "") {
          state.searchList = state.noteList.filter((note) => {
            return note.title
              .toLowerCase()
              .includes(action.payload.trim().toLowerCase());
          });
        }else{
          state.searchList=[];
        }
      });
  }
);
