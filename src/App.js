import React, { useState, useEffect } from "react";
import SwapiPage from "./pages/SwapiPage";
import { ListContext } from "./contexts/ListContext";

function App() {
  const [list, setList] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    let characters = [];
    for (let i = 1; i <= 9; i++) {
      let url = `https://swapi.dev/api/people/?page=${i}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((item) => {
            characters.push(item);
          });
        });
    }
    setList(characters);
    setSearchList(characters);
  };

  const ListContextValue = {
    list,
    setList,
    searchList,
    setSearchList,
    searchData,
    setSearchData,
  };
  return (
    <div>
      <ListContext.Provider value={ListContextValue}>
        <SwapiPage />
      </ListContext.Provider>
    </div>
  );
}

export default App;
