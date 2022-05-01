import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props)=>
{
    return (
        <form>
            <Input
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