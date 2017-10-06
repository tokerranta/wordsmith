import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const History = ({reverseHistory}) => {
    return (
        <ul>
            {reverseHistory.map((r,k) => {
                return (
                    <li key={k}>phrase: {r.phrase} reversed: {r.reversed}</li>
                );
            })}
        </ul>
    );
};

History.propTypes = {
    reverseHistory: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default History;

