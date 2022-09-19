import React, { useState } from "react";
import Card from "./Card";
import { Modal, Button } from "react-bootstrap";
const Notes = ({ notes, setNotes, setPin , set }) => {
  const [show, setShow] = useState(false);
  const [edito, setEdito] = useState({
    title: "",
    tagline: "",
  });
  const [getUpdate , setUpdate]=useState()
  const handleClose = () => setShow(false);
  
  const deleteNote = (id) => {
    let filter = notes.filter((elem, idx) => {
      return idx !== id;
    });
    setNotes(filter);
  };
  const pinned = (id) => {
    let pins = notes.filter((elem, idx) => {
      return idx === id;
    });
    setPin(pins);
    set(false)
  };

  const update = (prev) => {
    setShow(true);
    setEdito(prev);
    
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setEdito((state) => {
      return { ...state, [name]: value };
    });
  };
const handleChange=()=>{
  setShow(false)
  setUpdate(edito)
  
  let notess = JSON.stringify(notes)
for(let i = 0 ; i <notess.length ; i++){
  const index = notess[i]
  if(index._id === notess.id){
notess[index].title = edito.title;
notess[index].tagline = edito.tagline;
break;
  }
}

  setNotes(notess);

}


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <form className="form bg">
            <input
              type="text"
              name="title"
              placeholder="Title for note"
              className="titlem"
              value={edito.title}
              onChange={onChange}
            />
            <input
              type="text"
              name="tagline"
              placeholder="tageline"
              className="taglinem"
              value={edito.tagline}
              onChange={onChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="outline-warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleChange}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      
      <div className="notes">
        <h3 className="App happ">Notes !!!</h3>
        {notes.map((note, id) => {
          return (
            <Card
              key={id}
              id={id}
              note={note}
              setShow={setShow}
              pinned={pinned}
              update={update}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
