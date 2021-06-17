import React, {useContext} from 'react'
import ListItem from './ListItem'
import { ListContext } from "../contexts/ListContext";
import styled from "styled-components";

const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
`;

export default function List() {

    const { searchList } = useContext(ListContext);

    return (
        <ListStyled>
            {searchList.map((item, index)=>{
                return <ListItem key={index} item={item} />;
            })}
        </ListStyled>
    ) 
}
