/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const products = require('./products');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/products', products);

/**
 * Expose API router
 */
module.exports = router;
