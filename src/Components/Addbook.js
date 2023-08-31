import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    author: "",
    country: "",
    language: "",
    title: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/data", formData)
      .then((response) => {
        console.log("Book added successfully:", response.data);
        setShowPopup(true);
        setFormData({
          author: "",
          country: "",
          language: "",
          title: "",
        });
      })
      .catch((error) => {
        console.log("Error adding book:", error);
      });
  };

  // Close the popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="container mt-4">
      <h2>Add a New Book</h2>
      {showPopup && <div className="alert alert-success">Book added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{margin:"1rem"}}>
          Add Book
        </button>
        <NavLink className="btn btn-primary" to="/" style={{margin:"1rem"}} >Go To the LIst</NavLink>
      
      </form>
     
    </div>
  );
};

export default AddBook;

