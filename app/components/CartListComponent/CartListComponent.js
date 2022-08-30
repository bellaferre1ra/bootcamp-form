const React = require('react');
const { useContext } = React;

const PropTypes = require('prop-types');
const { CartContex } = require('../../context/cartContext');

const CartListComponent = ({ i18n }) => {
  const { cartList } = useContext(CartContex);

  return (
    <>
      {
        cartList.map((itemCart) => (
          <>
            <p>{itemCart.product.title}</p>
            <p>{itemCart.quantidade}</p>
          </>
        ))
      }
    </>
  );
};

CartListComponent.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  cartList: PropTypes.shape({
    product: PropTypes.arrayOf({}),
    quantity: PropTypes.number
  })
};

/**
 * Expose Something with i18n injection
 */
module.exports = CartListComponent;
