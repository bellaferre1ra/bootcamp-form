
const React = require('react');
const PropTypes = require('prop-types');
const Image = require('nordic/image');
const { useState, useContext } = React;

const { CartContex } = require('../../context/cartContext');

const ProductComponent = ({ product, i18n }) => {
    const { name, title, thumbnail, permalink, price, shipping } = product;
    const { free_shipping } = shipping;
    // const { cartList, setCartList } = useContext(CartContex);
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="productCard">
            <a
                target="_blank"
                href={permalink}>
                <figure>
                    <Image
                        src={thumbnail}
                        lazyload="off"
                    />
                </figure>
                <div className="productDetail">
                    <h1>
                        {title
                            ? i18n.gettext(title)
                            : i18n.gettext(name)}
                    </h1>
                    <h2>{i18n.gettext(`R$ ${price}`)}</h2>
                    <span className="shipping">
                        {free_shipping
                            ? "Frete grátis"
                            : "Frete a combinar"}
                    </span>
                </div>
                {/* <div className="AddCart">
                    <label htmlFor="quantity">
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </label>
                    <button onClick={setCartList}>
                        {productInCart
                            ? 'Remover do Carrinho'
                            : 'Adicionar ao Carrinho'}
                    </button>
                </div> */}
            </a>
        </div>
    );
};

ProductComponent.propTypes = {
    product: PropTypes.shape({
        permalink: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
    }),
};

/**
 * Expose Something with i18n injection
 */
module.exports = ProductComponent;
