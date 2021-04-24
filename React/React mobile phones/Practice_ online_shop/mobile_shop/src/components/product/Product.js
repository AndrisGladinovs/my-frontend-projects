import React from 'react';
import PropTypes from 'prop-types';
import classes from './Product.module.css';
import withContext from './../../context/withContext';
import { withRouter } from 'react-router-dom';

const Product = ({ product, context, history }) => {
    return (
        <div className={classes.product} onClick={() => history.push(`/products/${product.id}`)}>
            <img src={product.url} alt={`phone ${product.model}`} />
            <h2>{product.manufacture}</h2>
            <h3>{product.model}</h3>
            <h4> $ {product.price}</h4>
            <button onClick={(e) => {
                e.stopPropagation()
                context.addToCart(product.id)
            }}>add to cart</button>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        manufacture: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    context: PropTypes.shape({
        addToCart: PropTypes.func.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default withRouter(withContext(Product));