import React, { useState, useEffect } from "react";
import {SearchInput, SearchForm, SearchButton} from "../styles/member.styled"

const SearchBar = ({handleNewSearch}) => {
    const [value, setValue] = useState('')

    const handleSearch = (e) =>{
        e.preventDefault()
        handleNewSearch({query: value})
    }

    return(
        
        <SearchForm onSubmit={handleSearch}>
            <SearchInput
            type="text"
            name="search for a member"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Search for a member"
            />
            <SearchButton type="submit" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </SearchButton>
        </SearchForm>
  )
}

export default SearchBar;