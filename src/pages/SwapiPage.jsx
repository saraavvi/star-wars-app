import React, { useContext } from "react";
import List from "../components/List";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import { ListContext } from "../contexts/ListContext";

export default function SwapiPage() {
  const { searchList } = useContext(ListContext);

  return (
    <>
      <Header />
      <div className="container">{searchList && <List />}</div>
    </>
  );
}
