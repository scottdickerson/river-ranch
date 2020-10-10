import PropTypes from 'prop-types';

export const SitePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  detailsSrc: PropTypes.string.isRequired,
});
