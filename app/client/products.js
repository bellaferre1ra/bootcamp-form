/**
 * Styles
 */
require('../pages/products/styles.scss');
require('../components/ProductComponent/styles.scss');

/**
 * Module dependencies
 */
const React = require('react');
const hydrate = require('nordic/hydrate');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const ProductsView = require('../pages/products/view');

/**
 * Get server state
 */
const {
  site,
  siteId,
  lowEnd,
  deviceType,
  device,
  company,
  translations,
  imagesPrefix,
  data
} = window.__PRELOADED_STATE__;


/**
 * i18n
 */
const i18n = new I18n({ translations });

/**
 * Mount DemoView on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <ProductsView
        site={site}
        siteId={siteId}
        lowEnd={lowEnd}
        deviceType={deviceType}
        device={device}
        company={company}
        data={data}
      />
    </ImageProvider>
  </I18nProvider>,
  document.getElementById('root-app'),
);
