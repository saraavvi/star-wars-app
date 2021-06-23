import React, {useState} from 'react'
import ListItemInfo from './ListItemInfo';
import styled from "styled-components";

const ListItemStyled = styled.div`
  border-top: 3px solid #583c98;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  background-color: #fff;
  &:hover {
    border: 3px solid #583c98;
    transition: 0.5s all ease;
    cursor: pointer;
  }
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
            <ListItemInfo gender={item.gender} skinColor={item.skin_color} height={item.height} hair={item.hair_color} />
            }
        </ListItemStyled>
    )
}
