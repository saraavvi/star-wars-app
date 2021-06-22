import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #583c98;
  position: sticky;
  top: 0;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderStyled className="shadow-sm">
      <div>
        <h1><a href="/star-wars-app">Star wars characters</a></h1>
      </div>
      <div>
        <SearchForm />
      </div>
    </HeaderStyled>
  );
}
