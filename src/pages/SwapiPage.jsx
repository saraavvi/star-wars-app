import React, { useContext } from "react";
import List from "../components/List";
import Header from "../components/Header";
import { ListContext } from "../contexts/ListContext";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";

export default function SwapiPage() {
  const { searchList, isError } = useContext(ListContext);

  return (
    <>
      <Header />
      {isError ? (
        <ErrorMessage />
      ) : (
        <div className="container">
          {searchList ? <List /> : <LoadingMessage />}
        </div>
      )}
    </>
  );
}
