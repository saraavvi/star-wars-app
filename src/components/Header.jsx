import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const HeaderStyled = styled.div`
  //   border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #583c98;
  position: sticky;
  top: 0;
`;

export default function Header() {
  return (
    <HeaderStyled className="shadow-sm">
      <div>
        <h1>Star wars characters</h1>
      </div>
      <div>
        <SearchForm />
      </div>
    </HeaderStyled>
  );
}
