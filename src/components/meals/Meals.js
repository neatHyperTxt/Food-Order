import React from 'react';
import MealSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import styles from './Meals.module.css';
const Meals = () => {
    return (
        <div className={styles.meals}>
            <MealSummary/>
            <AvailableMeals/>
        </div>
    )
}
export default Meals;