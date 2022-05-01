import React, { Fragment } from 'react';
import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <Fragment>
            <div className={styles.summary}>
                <h1>Delicious Food At Your Doorstep</h1>
            </div>
        </Fragment>
    )
}
export default MealsSummary;