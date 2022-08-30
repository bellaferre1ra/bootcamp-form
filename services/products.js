const restclient = require('nordic/restclient')({
  timeout: 5000
});

class Service {
  static getProducts(siteId, productName, limit=5, offset=0) {
    console.log(siteId, productName, limit, offset);
    return restclient.get(`/sites/${siteId}/search`, {
      params: {
        q: productName,
        limit: limit,
        offset: offset
      }
    })
      .then(response => response.data);
  };
  
  // static getProducts(siteId, productName, limit = 5, offset = 0) {
  //   return restclient.get(`/sites/${siteId}/search`, {
  //     params: {
  //       q: productName,
  //       limit: limit,
  //       offset: offset
  //     }
  //   })
  //     .then(response => response.data.results);
  // };

  static getSite(siteId) {
    return restclient.get(`/sites/${siteId}`)
      .then(response => response.data);
  };
}
module.exports = Service;
