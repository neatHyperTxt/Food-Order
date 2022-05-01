import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props)=>
{
    return (
        <li className={styles.meal}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}
export default MealItem;