import React from 'react';
import PropTypes from 'prop-types';
import grid from '../../styles/grid.scss';

const Header = () => {
    return <div className={grid.container}>header</div>;
};

Header.propTypes = {
    theme: PropTypes.any
};

export default Header;
