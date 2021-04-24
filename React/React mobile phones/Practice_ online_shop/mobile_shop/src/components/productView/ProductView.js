import React from 'react';
import PropTypes from 'prop-types';
import withContext from './../../context/withContext';
import classes from './ProductView.module.css';

const ProductView = ({ context, match }) => {
    const product = context.products.find((p) => p.id === parseInt(match.params.id));

    return (
        <div className={classes.productView}>
            {
                product ?
                    <>
                        <div className={classes.productImg}>
                            <img src={product.url} alt='' />
                        </div>
                        <div className={classes.productDetails}>
                            <h2>{product.manufacture}</h2>
                            <h3>{product.model}</h3>
                            <h4>Price: {product.price} $</h4>
                            <p>{product.description}</p>
                            <button onClick={() => context.addToCart(product.id)}>add to cart</button>
                        </div>
                    </>
                    :
                    <h2>Product does not excist!</h2>
            }
        </div>
    )

}

ProductView.propTypes = {
    context: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                manufacture: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        addToCart: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default withContext(ProductView);