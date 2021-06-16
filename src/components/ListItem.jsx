import React, {useState} from 'react'
import ListItemInfo from './ListItemInfo';

export default function ListItem({item}) {

    console.log("item on listitem component")
    console.log(item)

    const [displayInfo, setDisplayInfo] = useState(false);

    const handleOnCLick = (e) =>{
       displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
    } 
   
    return (
        <div className="border" onClick={handleOnCLick}>
            <h5>{item.name}</h5>
            {displayInfo && 
            <ListItemInfo gender={item.gender} skinColor={item.skin_color} />
            }
        </div>
    )
}