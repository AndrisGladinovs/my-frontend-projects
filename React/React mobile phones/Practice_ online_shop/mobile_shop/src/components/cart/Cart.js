import React from 'react';
import withContext from './../../context/withContext';
import classes from './Cart.module.css';

const Cart = ({ context }) => {
    return (
        <div className={classes.cart}>
            <ul>
                <li key={Math.floor(Math.random() * 10000)}>
                    <span>ID</span>
                    <span>MODEL</span>
                    <span>PRICE</span>
                    <span>COUNT</span>
                </li>
                {context.cart.map(p =>
                    <li key={p.id}>
                        <span>{p.id}</span>
                        <span>{p.description}</span>
                        <span>{p.price}</span>
                        <span>{p.count}</span>
                        <button onClick={() => context.removeFromCart(p.id)}>remove</button>
                    </li>
                )}
            </ul>
            <hr />
            {context.cart.length > 0 ?
                <div className={classes.total}>Total: {context.total} $</div>
                :
                <div className={classes.total}>Total: 0 </div>
            }
        </div>
    )
}

export default withContext(Cart);