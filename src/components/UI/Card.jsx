import React from 'react';
import classes from './card.module.css';



const Card = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes["card-img"]}>
                <img src={props.imgSours} alt="projet" />
            </div>
            <div className={classes["card-text"]} >
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Card;
