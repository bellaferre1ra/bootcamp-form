//====>>>> API <<=====
const router = require('nordic/ragnar').router();
const productService = require('../services/products');

router.get('/', (req, res, next) => {
    const { q, limit, offset } = req.query;
    productService.getProducts(req.platform.siteId, q, limit, offset)
        .then((data) => {
            res.status(200).json(data)
        }).catch(next);
});

module.exports = router;


