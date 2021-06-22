import React, { useState, useEffect } from "react";
import SwapiPage from "./pages/SwapiPage";
import { ListContext } from "./contexts/ListContext";

function App() {
  const [list, setList] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [searchInput, setSearchInput] = useState(""); // byt namn searchInput
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    let characters = [];
    let page = 1;
    let next = null;
    do {
      try {
        let url = `https://swapi.dev/api/people/?page=${page}`;
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            next = data.next;
            data.results.forEach((item) => {
              characters.push(item);
            });
          });
        page++;
      } catch (error) {
        setIsError(true);
      }
    } while (next !== null);
    setList(characters);
    setSearchList(characters);
  };

  const ListContextValue = {
    list,
    setList,
    searchList,
    setSearchList,
    searchInput,
    setSearchInput,
    isError,
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
