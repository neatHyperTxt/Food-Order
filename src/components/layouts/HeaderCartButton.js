import React,{useContext} from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props)=>
{
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce((currNumber,item)=>{
        return currNumber+item.amount;
    },0);
    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
            <CartIcon/>
            </span>
            {`Your Cart ${numberOfItems}`}
        </button>
    )
}
export default HeaderCartButton;