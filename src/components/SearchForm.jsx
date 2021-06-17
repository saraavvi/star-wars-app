import React, { useContext } from 'react'
import { ListContext } from "../contexts/ListContext";

export default function SearchForm() {

    const { list, searchData, setSearchData, setSearchList } = useContext(ListContext);

    const handleOnChange = (e) =>{
        setSearchData(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        filterList(searchData)
        setSearchData("");
    }
    
    function filterList(searchString) {
        const filteredList = list.filter((item) =>
          item.name.includes(searchString)
        );
        setSearchList(filteredList);
      }

    return (
        <div className="row">
            <form onSubmit={handleOnSubmit}>
                <input value={searchData} placeholder="search" name="search" onChange={handleOnChange}/>
            </form>
        </div>
    )
}
