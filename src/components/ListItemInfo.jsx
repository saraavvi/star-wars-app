import React from 'react'
import styled from "styled-components";

const ItemInfoStyled = styled.div`

p {
    margin: 0;
}

`;

export default function ListItemInfo({gender, skinColor, height, hair}) {
    
    return (
        <ItemInfoStyled>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Height:</b> {height}</p>
            <p><b>Skin color: </b> {skinColor}</p>
            <p><b>Hair color:</b> {hair}</p>
        </ItemInfoStyled>
    )
}
