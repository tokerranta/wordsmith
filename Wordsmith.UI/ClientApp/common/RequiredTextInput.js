import React from 'react';
import PropTypes from 'prop-types';

const RequiredTextInput = ({ value, onChange, placeholderText }) => {
    return <input type="text" required value={value} onChange={onChange} placeholder={placeholderText} />;
};

RequiredTextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholderText: PropTypes.string
};

export default RequiredTextInput;