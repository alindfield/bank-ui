import React from 'react';
import './Headings.css';

const Headings = props => {
    const display = props.columns.map((column, index) => (
        <th key={index} {... column.config}>{column.name}</th>
    ));
    return (
        <tr className="headings">
            {display}
        </tr>
    );
}

export default Headings;