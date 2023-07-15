import React from 'react';
import css from './Container.module.css';

const Container = ({ title, children }) => (
  <div className={css.Container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Container;
