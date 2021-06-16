import React, {useState} from 'react'
import ListItemInfo from './ListItemInfo';

export default function ListItem({item}) {

    const [displayInfo, setDisplayInfo] = useState(false);

    const handleOnCLick = () =>{
       displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
    } 
   
    return (
        <div className="border" onClick={handleOnCLick}>
            <h3>List Item</h3>
            <h5>{item.name}</h5>
            {displayInfo && 
            <ListItemInfo gender={item.gender} skinColor={item.skin_color} />
            }
        </div>
    )
}
