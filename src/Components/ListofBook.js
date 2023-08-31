import React, { useEffect, useState } from "react";
import axios from "axios";
//import UpdateBookModel from './UpdateBookModel'
import UpdateBookModal from './UpdateBookModel'

const ListofBook = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    // Fetch the data from the API
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter the books based on the search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (bookId) => {
    // Send a DELETE request to the backend API
    axios
      .delete(`http://localhost:5000/data/${bookId}`)
      .then((response) => {
        console.log("Book deleted successfully:", response.data);
        // Update the books state by removing the deleted book
        setBooks(books.filter((book) => book._id !== bookId));
      })
      .catch((error) => {
        console.log("Error deleting book:", error);
      });
  };

  const handleUpdateClick = (book) => {
    setSelectedBook(book);
    setShowUpdateModal(true);
  };

  const handleUpdateBook = (updatedBook) => {
    // Send a PUT request to the backend API with the updated data
    axios
      .put(`http://localhost:5000/data/${updatedBook._id}`, updatedBook)
      .then((response) => {
        console.log("Book updated successfully:", response.data);
        // Update the books state with the updated book
        setBooks(books.map((book) => (book._id === updatedBook._id ? response.data.updatedBook : book)));
        setShowUpdateModal(false);
      })
      .catch((error) => {
        console.log("Error updating book:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title: {book.title}</h5>
                <p className="card-text">
                  <strong>Author:</strong> {book.author}
                </p>
                <p className="card-text">
                  <strong>Country:</strong> {book.country}
                </p>
                {/* Add other fields you want to display */}
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleUpdateClick(book)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showUpdateModal && (
        <UpdateBookModal
          book={selectedBook}
          onUpdate={handleUpdateBook}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default ListofBook;





