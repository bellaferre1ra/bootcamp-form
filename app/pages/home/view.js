/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const FormComponent = require('../../components/FormComponent');



/**
 * View Component
 */
function View(props) {
  const { i18n, translations, site, siteId, lowEnd, deviceType, company, imagesPrefix } = props;
  const preloadedState = {
    i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    company,
    imagesPrefix,
  };
  return (


    <div className="home">
      <Head>
        <title>
          {i18n.gettext('Home Page')}
        </title>

      </Head>

      <FormComponent /> 

      <Style href="home.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Home page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="home.js" />

      <h2>
        {i18n.gettext('Home Page')}
      </h2>

    </div>
  );
}

View.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  siteId: PropTypes.string.isRequired,
  translations: PropTypes.shape({}),
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    default_currency_id: PropTypes.string.isRequired,
  }).isRequired,
  lowEnd: PropTypes.bool,
  deviceType: PropTypes.string,
  company: PropTypes.string,
  imagesPrefix: PropTypes.string,
};

View.defaultProps = {
  translations: {},
  lowEnd: false,
  deviceType: null,
  company: null,
  imagesPrefix: '/',
};

/**
 * Inject i18n context as props into View.
 */
module.exports = injectI18n(View);
