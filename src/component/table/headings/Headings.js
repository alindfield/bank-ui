import React from 'react';
import './Headings.css';

const Headings = props => {
    const display = props.config.map((column, index) => (
        <th key={index} {... column.config}>{column.name}</th>
    ));
    console.log(display);
    return (
        <tr>
            {display}
        </tr>
    );
}

export default Headings;