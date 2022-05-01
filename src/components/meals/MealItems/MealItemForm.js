import React,{useRef} from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props)=>
{
    const amountInputRef = useRef();
    const submitHandler = (event)=>
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5)
        {
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id:'Amount'+`${props.id}`,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}
            />
            <div>
                <button className={styles.button}>Add</button>
            </div>
        </form>
    )
}
export default MealItemForm;