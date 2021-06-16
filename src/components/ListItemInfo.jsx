import React from 'react'

export default function ListItemInfo({gender, skinColor}) {
    
    return (
        <div>
            <p>Gender: {gender}</p>
            <p>Skin color: {skinColor}</p>
        </div>
    )
}
