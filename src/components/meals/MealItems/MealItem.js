import React,{useContext} from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const MealItem = (props)=>
{
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (enteredAmount)=>
    {
        const item = {
            id:props.id,
            name:props.name,
            amount:enteredAmount,
            price:props.price
        };
        ctx.addItem(item);
    }
    const ctx = useContext(CartContext);
    return (
        <li className={styles.meal}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    )
}
export default MealItem;