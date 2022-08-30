/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const { fetchSiteData, fetchProducts, render } = require('./controller');

/**
 * Routers
 */
router.get('/', fetchSiteData, fetchProducts, render);

/**
 * Expose router
 */
module.exports = router;
