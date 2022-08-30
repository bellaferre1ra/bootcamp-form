const React = require('react');
const { useState, useEffect } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

const ProductComponent = require('../../components/ProductComponent');

const restclient = require('nordic/restclient')({
  baseURL: '/api',
  timeout: 5000,
});

function View(props) {
  const { i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    device,
    company,
    imagesPrefix,
    data
  } = props;

  const preloadedState = {
    i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    device,
    company,
    imagesPrefix,
    data
  };

  const [productsList, setProductsList] = useState(data.results);

  const [product, setProduct] = useState(data.query);
  const [limit, setLimit] = useState(data.paging.limit);
  const [offset, setOffset] = useState(data.paging.offset);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {

    getProducts();

    if (offset == 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [offset]);

  function getProducts() {
    restclient.get(`/products?q=${product}&limit=${limit}&offset=${offset}`)
      .then(data => setProductsList(data.data.results));
  }

  function handleNext() {
    setOffset(prevOffset => prevOffset + limit);
  }

  function handlePrevious() {
    setOffset(prevOffset => prevOffset - limit);
  }

  return (
    <div className="homePage">
      <Style href="products.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="products.js" />

      <main className="mainContainer">
        <section className="produtsContainer">
          {
            productsList.map((product) => (
              <ProductComponent
                i18n={i18n}
                product={product}
              />
            ))
          }
        </section>
        <section>
          <button
            disabled={isDisabled}
            onClick={handlePrevious}
          >
            Anterior
          </button>
          <button
            onClick={handleNext}>
            Proxima
          </button>
        </section>
      </main>
    </div>
  );
}

module.exports = injectI18n(View);
