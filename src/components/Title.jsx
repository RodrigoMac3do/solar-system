import React from 'react';
import propTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};
