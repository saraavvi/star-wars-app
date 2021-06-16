import React, {useState, useEffect} from 'react'
import List from './List';
import SearchForm from './SearchForm';

export default function SwapiPage() {
    const [list, setList] = useState(null);

    useEffect(() =>{
            getCharacters();
    }, [])

    function getCharacters() {
        let characters = [];
        for(let i = 1; i <= 9; i++){
            let url = `https://swapi.dev/api/people/?page=${i}`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item =>{
                    characters.push(item);
                })
            })
        }
        setList(characters);
    }
        
    return (
        <div>
            <h1>SWAPI PAGE</h1> 
            <SearchForm /> 
            {list && console.log(list)}
            {list && 
                <List list={list}/>
            }              
        </div>
    )
}
