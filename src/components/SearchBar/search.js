import React, { useState } from "react";
import './style.css';
import characters from '../../characters.json';

const names = characters;


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    )
}

export default SearchBar;