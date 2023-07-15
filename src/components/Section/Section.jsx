import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.Section}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
