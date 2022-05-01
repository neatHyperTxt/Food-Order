import React,{useContext} from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props)=>
{
    const ctx = useContext(CartContext);
    const removeItemHandler = (id)=>
    {
        ctx.removeItem(id);
    }
    const addItemHandler = (item)=>
    {
        ctx.addItem({...item,amount:1});
    }
    const amount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;
    const cartItems = (<ul className={styles['cart-items']}>
        {ctx.items.map(item=>(
            <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount} onRemove={removeItemHandler.bind(null,item.id)} onAdd={addItemHandler.bind(null,item)}/>
        ))}
    </ul>);
    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{amount}</span>
            </div>
            <div className={styles.action}>
                <button onClick={props.onCloseCart} className={styles.button_alternate}>Close</button>
               { hasItems &&  <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;