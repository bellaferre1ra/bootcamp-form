/**
 * Module dependencies
 */
const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const productService = require('../../../services/products');
const { CartProvider } = require('../../context/cartContext');

const View = require('./view');

const { basePath } = config.ragnar;

/**
 * Fetch Site data
 */
exports.fetchSiteData = function fetchSiteData(req, res, next) {
  productService.getSite(req.platform.siteId)
    .then((data) => {
      res.locals.site = data;
      next();
    })
    .catch(err => next(err));
};

exports.fetchProducts = function fetchProducts(req, res, next) {
  const { q, limit, offset } = req.query;
  productService.getProducts(req.platform.siteId, q, limit, offset)
    .then((data) => {
      res.locals.data = data;
      next();
    }).catch(err => next(err));
};

/**
 * Render Demo
 */
exports.render = function render(req, res) {
  /**
   * View with I18nProvider and ImageProvider
   */

  const imagesPrefix = config.assets.prefix;

  const Products = props => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <CartProvider>
          <View {...props} />
        </CartProvider>
      </ImageProvider>
    </I18nProvider>
  );

  /**
   * Render View
   */
  res.render(Products, {
    baseURL: `${basePath}`,
    site: res.locals.site,
    siteId: req.platform.siteId,
    lowEnd: req.device.lowEnd,
    deviceType: req.device.type,
    device: req.device,
    translations: req.translations,
    company: config.get('companyName', req.platform.id, req.platform.siteId),
    imagesPrefix,
    data: res.locals.data

  }, {
    layoutOptions: {
      staticMarkup: false,
    },
    navigationOptions: {
      type: 'full',
    },
  });
};
