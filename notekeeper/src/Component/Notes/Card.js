import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import PushPinIcon from "@mui/icons-material/PushPin";

const Card = ({ note, id, deleteNote, update, setShow, pinned }) => {
  return (
    <>
      <div className="cardi" key={id}>
        <div className="cardii"  >
        <div className="notetitle">
          <h2>{note.title}</h2>
        </div>
        <div className="notetagline">
          <p>{note.tagline}</p>
        </div>
        <div className="ed">
          
          <button onClick={() => pinned(id)} className='pushbtn'>
            <PushPinIcon />
          </button>
          <button onClick={() => {
              update(note);
            }} className='editbtn'> 
            <EditIcon />
          </button>
        </div>
        <button onClick={() => deleteNote(id)} className='delbtn'>
            <DeleteIcon />
          </button>
      </div>
        </div>
        
    </>
  );
};

export default Card;
