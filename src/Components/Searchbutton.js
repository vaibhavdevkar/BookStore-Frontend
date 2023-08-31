import React, { useState } from "react";

const Searchbutton = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // You can perform your search logic here, like making an API call or processing the search query.
    console.log("Search query:", searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter your search query..."
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default Searchbutton;
