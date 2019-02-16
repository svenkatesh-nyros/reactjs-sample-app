import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormError.css';

const FormError = ({ err_status, err_msg }) => (
	<div className={''}>
		{err_status ? <span className="err_msg">{err_msg}</span> : <span>&nbsp;</span>}
 	</div>
);

FormError.propTypes = {
  err_status: PropTypes.bool,
  err_msg: PropTypes.string,
};

export default FormError;

