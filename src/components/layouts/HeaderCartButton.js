import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
const HeaderCartButton = (props)=>
{
    const amount = 0;
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
            <CartIcon/>
            </span>
            {`Your Cart ${amount}`}
        </button>
    )
}
export default HeaderCartButton;