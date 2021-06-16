import React, {useState} from 'react'

export default function SearchForm({filterList}) {

    const [searchData, setSearchData] = useState("");
    const handleOnChange = (e) =>{
        setSearchData(e.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        filterList(searchData)
        setSearchData("");
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={searchData} placeholder="search" name="search" onChange={handleOnChange}/>
            </form>
        </div>
    )
}
