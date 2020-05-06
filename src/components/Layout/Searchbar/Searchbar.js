import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchUsers } from "../../../redux/users/userActions";

import {
  SearchbarContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
} from "./SearchbarStyle";
import { SearchIcon } from "../../../styles/shared/Icons";

const Searchbar = ({ searchUsers, history }) => {
  const [query, setQuery] = useState("");

  const onChange = (event) => setQuery(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (query === "")
      return console.log("Please enter something to search for.");
    history.push(`/dashboard/search/${query}`);
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          placeholder="Search people..."
          onChange={onChange}
          value={query}
        />
        <SearchIconContainer onClick={onSubmit}>
          <SearchIcon />
        </SearchIconContainer>
      </SearchForm>
    </SearchbarContainer>
  );
};

export default withRouter(connect(null, { searchUsers })(Searchbar));
