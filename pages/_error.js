import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/error.scss';

function Error({ statusCode }) {
    return (
        <div className={styles.errorContainer}>
            <p className={styles.error}>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

Error.propTypes = {
    statusCode: PropTypes.any
};

export default Error;
