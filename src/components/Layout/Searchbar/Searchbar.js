import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { searchUsers } from "../../../redux/users/userActions";

import {
  SearchbarContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
} from "./SearchbarStyle";
import { SearchIcon } from "../../../styles/shared/Icons";

const Searchbar = ({ history }) => {
  const [query, setQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Search people...");

  const onChange = (event) => setQuery(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (query === "")
      return setPlaceholderText("Please enter something to search for.");
    history.push(`/dashboard/search/${query}`);
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          placeholder={placeholderText}
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

Searchbar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(null, { searchUsers })
)(React.memo(Searchbar));
