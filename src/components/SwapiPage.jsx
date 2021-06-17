import React, {useState, useEffect} from 'react'
import List from './List';
import SearchForm from './SearchForm';

export default function SwapiPage() {
    const [list, setList] = useState(null);
    const [searchlist, setSearchList] = useState(null);

    useEffect(() =>{
            getCharacters();
    }, [])

    const getCharacters = async() => {
        let characters = [];
        for(let i = 1; i <= 9; i++){
            let url = `https://swapi.dev/api/people/?page=${i}`;
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item =>{
                    characters.push(item);
                })
            })
        }
        setList(characters);
        setSearchList(characters);
    }

    function filterList(searchString) {
        console.log(searchString);
        const filteredList = list.filter(item => item.name.includes(searchString))
        setSearchList(filteredList);
    } 
    
        
    return (
        <div>
            <h1>SWAPI PAGE</h1> 
            <SearchForm filterList={filterList} /> 
            {searchlist && 
                <List list={searchlist}/>
            }              
        </div>
    )
}
