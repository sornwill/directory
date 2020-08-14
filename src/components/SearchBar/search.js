import React, { useState, useEffect } from "react";
import './style.css';
import characters from '../../characters.json';

//using https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg as reference

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

  const Data = characters;


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {                               
        let names = Data.name;
        const results = names.filter(names =>            //Getting error here
        names.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className="App">
        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
        />
        <ul>
            {searchResults.map(item => (
            <li>{item}</li>
            ))}
        </ul>
        </div>
  );
}

export default SearchBar;