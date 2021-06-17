import React, {useState} from 'react'
import ListItemInfo from './ListItemInfo';
import styled from "styled-components";

const ListItemStyled = styled.div`
  border-top: 3px solid grey;
  border-color: #583c98;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  background-color: #fff;
`;

export default function ListItem({item}) {

    const [displayInfo, setDisplayInfo] = useState(false);

    const handleOnCLick = () =>{
       displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
    } 
   
    return (
        <ListItemStyled onClick={handleOnCLick}>
            <h5>{item.name}</h5>
            {displayInfo && 
            <ListItemInfo gender={item.gender} skinColor={item.skin_color} />
            }
        </ListItemStyled>
    )
}
