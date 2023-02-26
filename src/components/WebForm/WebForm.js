import React, { useState } from "react";
import "./WebForm.css";

const WebForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const blog = { title, body, author };
    console.log(blog);
  };

  return (
    <div className="parent-container">
      <div className="wrapper">
        <h1 className="header">Web Form</h1>
        <form onSubmit={submitHandler}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">Mario</option>
            <option value="lisa">Lisa</option>
          </select>
          <button>Add blog</button>
        </form>
      </div>
    </div>
  );
};

export default WebForm;
