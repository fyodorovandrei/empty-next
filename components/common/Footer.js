import React from 'react';

import grid from '../../styles/grid.scss';
import PropTypes from 'prop-types';

const Footer = () => {
    return <div className={grid.container}>Footer</div>;
};

Footer.propTypes = {
    theme: PropTypes.any
};

export default Footer;
