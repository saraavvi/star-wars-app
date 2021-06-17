import React, {useContext} from 'react'
import ListItem from './ListItem'
import { ListContext } from "../contexts/ListContext";

export default function List() {

    const { searchList } = useContext(ListContext);

    return (
        <div className="row">
            {searchList.map((item, index)=>{
                return <ListItem key={index} item={item} />;
            })}
        </div>
    ) 
}
