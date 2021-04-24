import React from 'react';
import PropTypes from 'prop-types';
import Product from './../product/Product';
import withContext from './../../context/withContext';
import classes from './ProductsList.module.css';

const ProductsList = ({ context }) => {
    return (
        <div className={classes.productsList}>
            {context.products.map(p => <Product key={p.id} product={p} />)}
        </div>
    )
}

ProductsList.propTypes = {
    context: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                manufacture: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }).isRequired
}

export default withContext(ProductsList);