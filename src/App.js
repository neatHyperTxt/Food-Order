import './App.css';
import React,{useState} from 'react';
import Header from './components/layouts/Header';
import Meals from './components/meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = ()=>
  {
    setCartIsShown(true);
  }
  const hideCartHandler = ()=>
  {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
