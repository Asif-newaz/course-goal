import React, { useState } from "react";
import "./WebForm.css";

const WebForm = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="parent-container">
      <div className="wrapper">
        <h1 className="header">Web Form</h1>
        <form>
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
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">Mario</option>
            <option value="lisa">Lisa</option>
          </select>
          <button>Add blog</button>
          <p>{title}</p>
          <p>{blog}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  );
};

export default WebForm;
