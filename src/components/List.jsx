import React from 'react'
import ListItem from './ListItem'

export default function List({list}) {
console.log("list on list component")

    return (
        <div>
            <h2>List</h2>
            {list.map((item, index)=>{
                return <ListItem key={index} item={item} />;
            })}
        </div>
    ) 
}
