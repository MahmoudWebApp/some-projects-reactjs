import React from 'react';
import "./listItem.css";

const ListItem = ({people}) => {
    const {name,image,age}=people;
    return (
        <li className='list-container'>
           <div className='picture-box'>
            <img src={image} alt={name} />
            </div> 
            <div className='text-box'>
            <h4>{name}</h4>
            <p>{age}years</p>
            </div>
        </li>
    )
}

export default ListItem;
