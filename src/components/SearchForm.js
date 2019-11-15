import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
  const results= characters.filter(character => 
    character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
     <form>
        <lable htmlFor="name" >Search: </lable>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
     </form>
     <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>

    </section>

  );

}


