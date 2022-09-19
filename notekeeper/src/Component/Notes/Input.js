import React, { useState } from "react";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

const Input = ({ insert , setNot }) => {
  const [data, setData] = useState({
    title: "",
    tagline: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData((state) => {
      return { ...state, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    insert(data)
    setData({
      title: "",
      tagline: "",
    });
    setNot(false)
  };
  return (
    <div className="App">


      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title for note"
          className="title"
          value={data.title}
          onChange={handleInputs}
          minLength='1'
          maxLength='10'
          required
        />
        <input
          type="text"
          name="tagline"
          placeholder=" Give a tageline"
          className="tagline"
          value={data.tagline}
          onChange={handleInputs}
          minLength='1'
          maxLength='400'
          required
        />
        <button className="add" onSubmit={handleSubmit}>
          <DownloadDoneIcon />
        </button>
      </form>
    </div>
  );
};

export default Input;
