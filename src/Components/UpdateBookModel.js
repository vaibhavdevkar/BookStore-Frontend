import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateBookModal = ({ book, onClose }) => {
  const [formData, setFormData] = useState({
    author: book.author,
    country: book.country,
    language: book.language,
    title: book.title,
  });

  useEffect(() => {
    setFormData({
      author: book.author,
      country: book.country,
      language: book.language,
      title: book.title,
    });
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Send a PUT request to the backend API with the updated data
    axios
      .put(`http://localhost:5000/data/${book._id}`, formData)
      .then((response) => {
        console.log("Book updated successfully:", response.data);
        onClose(); // Close the modal after updating
      })
      .catch((error) => {
        console.log("Error updating book:", error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Book</h2>
        <form>
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
          <button type="button" className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookModal;

