import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import styled from "styled-components";

const FormStyled = styled.form`
input {
    width: 100%;
    height: 3rem;
    opacity: 0.3;
    border-radius: 0.3rem;
    // border: none;
    padding: 0.5rem;
    &:hover {
      opacity: 0.7;
    }
    &:focus {
      opacity: 0.7;
      outline: none;
    }
`;

export default function SearchForm() {
  const { list, searchData, setSearchData, setSearchList } = useContext(
    ListContext
  );

  const handleOnChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    filterList(searchData);
    setSearchData("");
  };

  function filterList(searchString) {
    const filteredList = list.filter((item) =>
      item.name.includes(searchString)
    );
    setSearchList(filteredList);
  }

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <input
        value={searchData}
        placeholder="search"
        name="search"
        onChange={handleOnChange}
      />
    </FormStyled>
  );
}
