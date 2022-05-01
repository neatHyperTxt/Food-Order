import React,{Fragment} from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderImage from '../../assets/HeaderImage.jpg'
const Header = (props)=>
{
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles.image}>
                <img src={HeaderImage}/>
            </div>
        </Fragment>
    )
}
export default Header;